/// <reference types="cypress" />

describe('/pages/app/login', () => {
  it('should go to /app/profile', () => {
    cy.visit('/app/login/');

    cy.get('#formCadastro input[name="username"]').type('omariosouto');
    cy.get('#formCadastro input[name="password"]').type('senhasegura');
    cy.get('#formCadastro button[type="submit"]').click();

    cy.url().should('include', '/app/profile');
  });

  it('should store jwt token', () => {
    cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
      .as('userLogin');
    cy.visit('/app/login/');

    cy.get('#formCadastro input[name="username"]').type('omariosouto');
    cy.get('#formCadastro input[name="password"]').type('senhasegura');
    cy.get('#formCadastro button[type="submit"]').click();

    cy.wait('@userToken').then((intercept) => {
      const { token } = intercept.response.body.data;

      cy.getCookie('APP_TOKEN')
        .should('exist')
        .should('have.property', 'value', token);
    });
  });
});
