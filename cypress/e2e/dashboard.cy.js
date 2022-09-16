/// <reference types="cypress" />

context('Dashboard', () => {
  it('should render sort labels', () => {
    cy.login();

    const serverSortLabel = cy.get('[data-testid=server-column-label]');
    const distanceSortLabel = cy.get('[data-testid=distance-column-label]');

    serverSortLabel.should('exist');
    distanceSortLabel.should('exist');
  });

  it('should have possibility to log out', () => {
    cy.login();

    const logoutButton = cy.get('[data-testid=logout-button]');
    logoutButton.click();
    cy.url().should('contain', '/login');
  });
});
