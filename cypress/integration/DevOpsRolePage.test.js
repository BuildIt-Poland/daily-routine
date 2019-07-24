/* global cy*/

import { DEV_OPS_ROLE } from '../../src/constants/roles';
import { BRAG, CONFESS } from '../../src/constants/roleActions';

describe('DevOpsRolePage', () => {
  beforeEach(function() {
    cy.visit(`/${DEV_OPS_ROLE}`)
  });

  it('should have correct location path', () => {
    cy.location('pathname').should('eq', `/${DEV_OPS_ROLE}`);
  });

  describe(`${BRAG} button`, () => {
    describe('when clicked', () => {
      it(`should redirect to the /${DEV_OPS_ROLE}/${BRAG}`, () => {
        cy.getByTestId(`${DEV_OPS_ROLE}-${BRAG}-button`).click();
        cy.location('pathname').should('contain', `/${DEV_OPS_ROLE}/${BRAG}`);
      });
    })
  });

  describe(`${CONFESS} button`, () => {
    describe('when clicked', () => {
      it(`should redirect to the /${DEV_OPS_ROLE}/${CONFESS}`, () => {
        cy.getByTestId(`${DEV_OPS_ROLE}-${CONFESS}-button`).click();
        cy.location('pathname').should('contain', `/${DEV_OPS_ROLE}/${CONFESS}`);
      });
    });
  });

});
