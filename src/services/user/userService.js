import authService from '../auth/authService';
import HttpClient from '../http/httpService';
import { BASE_URL } from '../login/loginService';

export default function userService() {
  return {
    async getProfilePage(ctx) {
      const url = `${BASE_URL}/api/users/posts`;
      try {
        const token = await authService(ctx).getToken();

        const response = await HttpClient(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        return {
          user: {
            totalLikes: 100,
          },
          posts: response.data,
        };
      } catch (err) {
        throw new Error('Falha em pegar os dados do servidor :(');
      }
    },
  };
}
