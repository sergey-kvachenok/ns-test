/// <reference types="cypress" />

const username = Cypress.env('username');
const password = Cypress.env('password');

Cypress.Commands.add('login', () => {
  cy.visit('/login');

  const dashboardTitle = 'Servers';

  const usernameInput = cy.get('[data-testid=username]');
  const passwordInput = cy.get('[data-testid=password]');
  const submitButton = cy.get('[data-testid=submit-login-button]');

  usernameInput.type(username);
  passwordInput.type(password);

  submitButton.click();
  cy.url().should('contain', '/');
  cy.contains(dashboardTitle).should('exist');
});
