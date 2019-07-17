/* global cy*/

import { BRAG_ROLE_ACTION, CONFESS_ROLE_ACTION, DEV_OPS_ROLE } from '../../src/constants/roles';

describe('DevOpsRolePage', () => {
  beforeEach(function() {
    cy.visit(`/${DEV_OPS_ROLE}`)
  });

  it('should have correct location path', () => {
    cy.location('pathname').should('eq', `/${DEV_OPS_ROLE}`);
  });

  describe(`${BRAG_ROLE_ACTION} button`, () => {
    describe('when clicked', () => {
      it(`should redirect to the /${DEV_OPS_ROLE}/${BRAG_ROLE_ACTION}`, () => {
        cy.getByTestId(`${DEV_OPS_ROLE}-${BRAG_ROLE_ACTION}-button`).click();
        cy.location('pathname').should('contain', `/${DEV_OPS_ROLE}/${BRAG_ROLE_ACTION}`);
      });
    })
  });

  describe(`${CONFESS_ROLE_ACTION} button`, () => {
    describe('when clicked', () => {
      it(`should redirect to the /${DEV_OPS_ROLE}/${CONFESS_ROLE_ACTION}`, () => {
        cy.getByTestId(`${DEV_OPS_ROLE}-${CONFESS_ROLE_ACTION}-button`).click();
        cy.location('pathname').should('contain', `/${DEV_OPS_ROLE}/${CONFESS_ROLE_ACTION}`);
      });
    });
  });

});
