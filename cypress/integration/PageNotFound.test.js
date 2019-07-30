/* global cy*/

describe('PageNotFound', () => {

  beforeEach(function () {
    cy.visit('/');
  });

  it('page should contains header with `404 - Page not found`', () => {
    cy.visit('/invalidurl');
    cy.get('h1').contains('404 - Page not found');
  });

  it('qoute bubble should contain error message when url is `frontend/brag/invalidmessage`', () => {
    cy.visit('frontend/brag/invalidmessage');
    cy.get('[data-testid="quote-error-message"] strong').contains('4o4 Error');
  });

  it('quote bubble should contain error message when url is `frontend/brag`', () => {
    cy.visit('frontend/brag');
    cy.get('[data-testid="quote-error-message"] strong').contains('4o4 Error');
  });

  it('quote bubble should contain error message when url is `frontend/invalidpose/invalidmessage`', () => {
    cy.visit('frontend/invalidpose/invalidmessage');
    cy.get('[data-testid="quote-error-message"] strong').contains('4o4 Error');
  });

  it('quote bubble should contain error message when url is `frontend/invalidpose/spiritually-spiritually-leaking-walrus`', () => {
    cy.visit('frontend/invalidpose/spiritually-spiritually-leaking-walrus/invalid');
    cy.get('[data-testid="quote-error-message"] strong').contains('4o4 Error');
  });

  it('quote bubble should contain error message when url is `frontend/invalidpose/spiritually-spiritually-leaking-walrus/invalid`', () => {
    cy.visit('frontend/invalidpose/spiritually-spiritually-leaking-walrus/invalid');
    cy.get('[data-testid="quote-error-message"] strong').contains('4o4 Error');
  });
});
