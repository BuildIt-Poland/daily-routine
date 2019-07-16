/* global cy*/

import { BRAG_ROLE_ACTION, CONFESS_ROLE_ACTION, FRONT_END_ROLE } from '../../src/constants/roles';

describe('FrontEndRolePage', () => {
  beforeEach(function() {
    cy.visit(`/${FRONT_END_ROLE}`)
  });

  it('should have correct location path', () => {
    cy.location('pathname').should('eq', `/${FRONT_END_ROLE}`);
  });

  describe(`${BRAG_ROLE_ACTION} button`, () => {
    describe('when clicked', () => {
      it(`should redirect to the /${FRONT_END_ROLE}/${BRAG_ROLE_ACTION}`, () => {
        cy.getByTestId(`${FRONT_END_ROLE}-${BRAG_ROLE_ACTION}-button`).click();
        cy.location('pathname').should('eq', `/${FRONT_END_ROLE}/${BRAG_ROLE_ACTION}/1`);
      });
    })
  });

  describe(`${CONFESS_ROLE_ACTION} button`, () => {
    describe('when clicked', () => {
      it(`should redirect to the /${FRONT_END_ROLE}/${CONFESS_ROLE_ACTION}`, () => {
        cy.getByTestId(`${FRONT_END_ROLE}-${CONFESS_ROLE_ACTION}-button`).click();
        cy.location('pathname').should('eq', `/${FRONT_END_ROLE}/${CONFESS_ROLE_ACTION}/1`);
      });
    });
  });

});
