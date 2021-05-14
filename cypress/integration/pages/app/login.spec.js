/// <reference types="cypress" />
import LoginScreenPageObject from '../../../../src/components/screens/Login/login.pageObject';

describe('Login Page', () => {
  describe('when fill and submit login form request', () => {
    it('should go to /app/profile', () => {
      // Arrange
      const loginScreen = new LoginScreenPageObject(cy);
      cy.visit('/app/login/');

      // Act
      loginScreen.fillLoginForm({ user: 'omariosouto', password: 'senhasegura' });
      loginScreen.submitLoginForm();

      // Assert
      cy.url().should('include', '/app/profile');
    });

    it('should store jwt token', () => {
      // Arrange
      const loginScreen = new LoginScreenPageObject(cy);
      cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
        .as('userLogin');
      cy.visit('/app/login/');

      // Act
      loginScreen.fillLoginForm({ user: 'omariosouto', password: 'senhasegura' });
      loginScreen.submitLoginForm();

      cy.wait('@userLogin').then((intercept) => {
        const { token } = intercept.response.body.data;
        console.log(cy.getCookie('LOGIN_COOKIE_APP_TOKEN'));

        // Assert
        cy.getCookie('LOGIN_COOKIE_APP_TOKEN')
          .should('have.property', 'value', token);
      });
    });
  });
});
