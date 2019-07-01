/* global cy*/

import { BACK_END_ROLE, BRAG_ROLE_ACTION, CONFESS_ROLE_ACTION } from '../../src/constants/roles';

describe('BackEndRolePage', () => {
  beforeEach(function() {
    cy.visit(`/${BACK_END_ROLE}`)
  });

  it('should have correct location path', () => {
    cy.location('pathname').should('eq', `/${BACK_END_ROLE}`);
  });

  describe(`${BRAG_ROLE_ACTION} button`, () => {
    describe('when clicked', () => {
      it(`should redirect to the /${BACK_END_ROLE}/${BRAG_ROLE_ACTION}`, () => {
        cy.getByTestId(`${BACK_END_ROLE}-${BRAG_ROLE_ACTION}-button`).click();
        cy.location('pathname').should('eq', `/${BACK_END_ROLE}/${BRAG_ROLE_ACTION}`);
      });
    })
  });

  describe(`${CONFESS_ROLE_ACTION} button`, () => {
    describe('when clicked', () => {
      it(`should redirect to the /${BACK_END_ROLE}/${CONFESS_ROLE_ACTION}`, () => {
        cy.getByTestId(`${BACK_END_ROLE}-${CONFESS_ROLE_ACTION}-button`).click();
        cy.location('pathname').should('eq', `/${BACK_END_ROLE}/${CONFESS_ROLE_ACTION}`);
      });
    });
  });

});
