/* global cy*/

import { FRONT_END_ROLE } from '../../src/constants/roles';

describe('Logo', () => {

  beforeEach(function() {
    cy.visit('/');
  });

  it('should have icon', () => {
    cy.get('[data-testid="logo"] svg').should('exist');
  });

  it('should have correct href attribute', () => {
    cy.getByTestId('logo').should('have.attr', 'href', '/');
  });

  describe('when clicked', () => {
    it('should redirect to the home page', () => {
      cy.visit(`/${FRONT_END_ROLE}`);
      cy.getByTestId('logo').click();
      cy.location('pathname').should('eq', '/');
    });
  })

});
