export default async function HttpClient(url, { headers, body, ...options }) {
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
        if (serverResponse.status === 204) {
          return serverResponse.text();
        }
        return serverResponse.json();
      }

      throw new Error('Falha em pegar os dados do servidor :(');
    });
}
