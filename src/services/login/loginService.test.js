import loginService from './loginService';

const token = 'fake-token';

const setCookie = jest.fn();

async function HttpClient() {
  return {
    data: {
      token,
    },
  };
}

async function HttpClientError() {
  return {
    data: {},
    err: {
      message: 'Failed to login',
    },
  };
}

describe('loginService', () => {
  describe('login()', () => {
    describe('when user try to login successfully', () => {
      it('should store its token', async () => {
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
          'LOGIN_COOKIE_APP_TOKEN',
          token,
          {
            path: '/',
            maxAge: 604800,
          },
        );
        expect(loginServiceResponse).toEqual({ token });
      });
    });

    describe('when user try to login and fails', () => {
      it('should throw an error', async () => {
        await expect(loginService.login(
          {
            username: 'username',
            password: 'password',
          },
          setCookie,
          HttpClientError,
        )).rejects.toThrow('Failed to login');
      });
    });
  });

  describe('logout()', () => {
    describe('when user try to logout successfully', () => {
      it('should remove its token', async () => {
        const destroyCookie = jest.fn();

        await loginService.logout(null, destroyCookie);

        expect(destroyCookie).toHaveBeenCalledWith(
          null,
          'LOGIN_COOKIE_APP_TOKEN',
          { path: '/' },
        );
      });
    });
  });
});
