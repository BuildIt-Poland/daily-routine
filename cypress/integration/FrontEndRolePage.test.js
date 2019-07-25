/* global cy*/

import { FRONT_END_ROLE } from '../../src/constants/roles';
import { BRAG, CONFESS } from '../../src/constants/roleActions';

describe('FrontEndRolePage', () => {
  beforeEach(function() {
    cy.visit(`/${FRONT_END_ROLE}`)
  });

  it('should have correct location path', () => {
    cy.location('pathname').should('eq', `/${FRONT_END_ROLE}`);
  });

  describe(`${BRAG} button`, () => {
    describe('when clicked', () => {
      it(`should redirect to the /${FRONT_END_ROLE}/${BRAG}`, () => {
        cy.getByTestId(`${FRONT_END_ROLE}-${BRAG}-button`).click();
        cy.location('pathname').should('contain', `/${FRONT_END_ROLE}/${BRAG}`);
      });
    })
  });

  describe(`${CONFESS} button`, () => {
    describe('when clicked', () => {
      it(`should redirect to the /${FRONT_END_ROLE}/${CONFESS}`, () => {
        cy.getByTestId(`${FRONT_END_ROLE}-${CONFESS}-button`).click();
        cy.location('pathname').should('contain', `/${FRONT_END_ROLE}/${CONFESS}`);
      });
    });
  });

});
