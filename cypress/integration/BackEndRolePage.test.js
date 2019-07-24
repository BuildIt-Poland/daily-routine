/* global cy*/

import { BACK_END_ROLE } from '../../src/constants/roles';
import { BRAG, CONFESS } from '../../src/constants/roleActions';

describe('BackEndRolePage', () => {
  beforeEach(function() {
    cy.visit(`/${BACK_END_ROLE}`)
  });

  it('should have correct location path', () => {
    cy.location('pathname').should('eq', `/${BACK_END_ROLE}`);
  });

  describe(`${BRAG} button`, () => {
    describe('when clicked', () => {
      it(`should redirect to the /${BACK_END_ROLE}/${BRAG}`, () => {
        cy.getByTestId(`${BACK_END_ROLE}-${BRAG}-button`).click();
        cy.location('pathname').should('contain', `/${BACK_END_ROLE}/${BRAG}`);
      });
    })
  });

  describe(`${CONFESS} button`, () => {
    describe('when clicked', () => {
      it(`should redirect to the /${BACK_END_ROLE}/${CONFESS}`, () => {
        cy.getByTestId(`${BACK_END_ROLE}-${CONFESS}-button`).click();
        cy.location('pathname').should('contain', `/${BACK_END_ROLE}/${CONFESS}`);
      });
    });
  });

});
