/// <reference types="cypress" />

export default class CreatePostForm {
  constructor(cy) {
    this.cy = cy;
  }

  showFormModal() {
    cy.get('#addPostButton').click();
    return this;
  }

  fillStep1Form({ photoUrl }) {
    this.cy.get('#createPostForm input[name="photoUrl"]').type(photoUrl);
    return this;
  }

  goToStep2() {
    this.cy.get('#buttonGoToStep2').click();
    return this;
  }

  fillStep2Form({ filterClass }) {
    this.cy.get(`#button-${filterClass}`).click();
    return this;
  }

  goToStep3() {
    this.cy.get('#buttonGoToStep3').click();
    return this;
  }

  fillStep3Form({ description }) {
    this.cy.get('#createPostForm input[name="description"]').type(description);
    return this;
  }

  submitForm() {
    this.cy.get('#buttonCreatePost').click();
    return this;
  }
}
