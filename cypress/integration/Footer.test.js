/* global cy*/

describe('Footer', () => {
  beforeEach(function() {
    cy.visit(`/`)
  });

  describe('Buildit home page link', () => {
    it('should have correct href attribute', () => {
      cy.getByTestId('buildit-home-page-link').should('have.attr', 'href', 'https://buildit.wiprodigital.com/');
    });
  });

  describe('Buildit career page link', () => {
    it('should have correct href attribute', () => {
      cy.getByTestId('buildit-career-link').should('have.attr', 'href', 'https://buildit.wiprodigital.com/careers/');
    });
  });

  describe('Github link', () => {
    it('should have correct href attribute', () => {
      cy.getByTestId('github-link').should('have.attr', 'href', 'https://github.com/BuildIt-Poland/daily-routine');
    });
  });

});
