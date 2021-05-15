import { setCookie, destroyCookie } from 'nookies';
// import isStagingEnv from '../../infra/env/isStagingEnv';

import HttpClient from '../http/httpService';

export const LOGIN_COOKIE_APP_TOKEN = 'LOGIN_COOKIE_APP_TOKEN';

export const BASE_URL = 'https://instalura-api-git-master-omariosouto.vercel.app';
// export const BASE_URL = isStagingEnv
//   ? 'https://instalura-api-git-master-omariosouto.vercel.app'
//   : 'https://instalura-api.omariosouto.vercel.app';

const loginService = {
  async login(
    { username, password },
    setCookieModule = setCookie,
    HttpClientModule = HttpClient,
  ) {
    return HttpClientModule(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username,
        password,
      },
    })
      .then((jsonResponse) => {
        const { token, user } = jsonResponse.data;
        const hasToken = !!token;
        const DAY_IN_SECONDS = 86400;

        if (!hasToken) {
          throw new Error('Failed to login');
        }

        setCookieModule(null, LOGIN_COOKIE_APP_TOKEN, token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7,
        });

        return { token, user };
      });
  },
  async logout(ctx, destroyCookieModule = destroyCookie) {
    destroyCookieModule(ctx, LOGIN_COOKIE_APP_TOKEN, { path: '/' });
    destroyCookieModule(ctx, 'USER_INFO', { path: '/' });
  },
};

export default loginService;
