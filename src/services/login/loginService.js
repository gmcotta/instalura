import { setCookie, destroyCookie } from 'nookies';

async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((serverResponse) => {
      if (serverResponse.ok) {
        return serverResponse.json();
      }

      throw new Error('Falha em pegar os dados do servidor :(');
    });
}

const loginService = {
  async login({ username, password }) {
    return HttpClient('https://instalura-api.omariosouto.vercel.app/api/login', {
      method: 'POST',
      body: {
        username,
        password,
      },
    })
      .then((jsonResponse) => {
        const { token } = jsonResponse.data;
        const DAY_IN_SECONDS = 86400;

        setCookie(null, 'APP_TOKEN', token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7,
        });

        return { token };
      });
  },
  logout() {
    destroyCookie(null, 'APP_TOKEN');
  },
};

export default loginService;
