/// <reference types="cypress" />

describe('/pages/app/login', () => {
  it('should go to /app/profile', () => {
    cy.visit('/app/login/');

    cy.get('#formCadastro input[name="usuario"]').type('omariosouto');
    cy.get('#formCadastro input[name="senha"]').type('senhasegura');
    cy.get('#formCadastro button[type="submit"]').click();

    cy.url().should('include', '/app/profile');
  });
});
