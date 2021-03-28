import loginService from './loginService';

describe('loginService', () => {
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
