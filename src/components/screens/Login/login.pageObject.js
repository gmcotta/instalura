/// <reference types="cypress" />

export default class LoginScreenPageObject {
  constructor(cy) {
    this.cy = cy;
    this.cy.visit('/app/login');
  }

  fillLoginForm({ user, password }) {
    this.cy.get('#formCadastro input[name="username"]').type(user);
    this.cy.get('#formCadastro input[name="password"]').type(password);

    return this;
  }

  submitLoginForm() {
    this.cy.get('#formCadastro button[type="submit"]').click();

    return this;
  }
}
