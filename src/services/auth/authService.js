import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';

import loginService, { BASE_URL, LOGIN_COOKIE_APP_TOKEN } from '../login/loginService';
import HttpClient from '../http/httpService';

export default function authService(ctx) {
  const cookies = parseCookies(ctx);
  const token = cookies[LOGIN_COOKIE_APP_TOKEN];

  return {
    async getToken() {
      return token;
    },
    async hasActiveSession() {
      return HttpClient(`${BASE_URL}/api/auth`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(({ data }) => {
          if (data.authenticated) {
            return true;
          }
          loginService.logout(ctx);
          return false;
        })
        .catch(() => {
          loginService.logout(ctx);
          return false;
        });
    },
    getSession() {
      const session = jwt.decode(token);
      return session;
    },
  };
}
