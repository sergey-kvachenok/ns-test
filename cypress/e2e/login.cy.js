/// <reference types="cypress" />

context('Login page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it('should validate the form and show validation errors if the form is empty', () => {
    const requiredUsernameError = 'Please provide a user name. This field is mandatory';
    const requiredPasswordError = 'Please provide a password. This field is mandatory';

    const submitButton = cy.get('[data-testid=submit-login-button]');

    submitButton.should('exist');
    submitButton.click();

    cy.contains(requiredUsernameError).should('exist');
    cy.contains(requiredPasswordError).should('exist');
  });

  it('should show server error response', () => {
    const requiredUsernameError = 'Please provide a user name. This field is mandatory';
    const requiredPasswordError = 'Please provide a password. This field is mandatory';
    const serverErrorResponse = 'Unauthorized';

    const usernameInput = cy.get('[data-testid=username]');
    const passwordInput = cy.get('[data-testid=password]');
    const submitButton = cy.get('[data-testid=submit-login-button]');

    usernameInput.type('Britney Spears');
    passwordInput.type('123');

    submitButton.click();

    cy.contains(requiredUsernameError).should('not.exist');
    cy.contains(requiredPasswordError).should('not.exist');
    cy.contains(serverErrorResponse).should('exist');
  });
});
