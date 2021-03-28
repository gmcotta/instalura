import loginService from './loginService';

describe('loginService', () => {
  describe('login()', () => {
    describe('when user try to login', () => {
      it('should store its token', async () => {
        const token = 'fake-token';
        const setCookie = jest.fn();
        async function HttpClient() {
          return {
            data: {
              token,
            },
          };
        }

        const loginServiceResponse = await loginService.login(
          {
            username: 'username',
            password: 'password',
          },
          setCookie,
          HttpClient,
        );

        expect(setCookie).toHaveBeenCalledWith(
          null,
          'APP_TOKEN',
          token,
          {
            path: '/',
            maxAge: 604800,
          },
        );
        expect(loginServiceResponse).toEqual({ token });
      });
    });
  });

  describe('logout()', () => {
    describe('when user try to logout successfully', () => {
      it('should remove its token', async () => {
        const destroyCookie = jest.fn();

        await loginService.logout(destroyCookie);

        expect(destroyCookie).toHaveBeenCalledWith(null, 'APP_TOKEN');
      });
    });
  });
});
