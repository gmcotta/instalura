/// <reference types="cypress" />
import CreatePostForm from '../../../../src/components/patterns/FormCreatePost/formCreatePost.pageObject';
import LoginScreenPageObject from '../../../../src/components/screens/Login/login.pageObject';

describe('Profile Page', () => {
  beforeEach(() => {
    const loginScreen = new LoginScreenPageObject(cy);

    cy.visit('/app/login/');

    loginScreen.fillLoginForm({ user: 'omariosouto', password: 'senhasegura' });
    loginScreen.submitLoginForm();
  });
  describe('When user clicks on add post button', () => {
    it('should add a post', () => {
      const createPostForm = new CreatePostForm(cy);
      const photoUrl = 'https://i.ytimg.com/vi/aEtm69mLK6w/hqdefault.jpg';
      const filterClass = 'filter-1977';
      const description = `Descrição-${Date.now()}`;

      createPostForm.showFormModal();
      createPostForm.fillStep1Form({ photoUrl });
      createPostForm.goToStep2();
      createPostForm.fillStep2Form({ filterClass });
      createPostForm.goToStep3();
      createPostForm.fillStep3Form({ description });
      createPostForm.submitForm();

      cy.url().should('include', '/app/profile');
      cy.get(`img[alt="${description}"]`).should('exist');
    });
  });
});
