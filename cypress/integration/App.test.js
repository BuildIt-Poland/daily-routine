/* global cy*/

import {
  BACK_END_ROLE, BACK_END_ROLE_LABEL,
  DEV_OPS_ROLE,
  DEV_OPS_ROLE_LABEL,
  FRONT_END_ROLE,
  FRONT_END_ROLE_LABEL
} from '../../src/constants/roles';

describe('App', () => {
  beforeEach(function(){
    cy.visit('/');
  });

  describe(`${FRONT_END_ROLE} role button`, () => {

    it('should have correct caption', () => {
      cy.getByTestId(`${FRONT_END_ROLE}-button`).should('have.text', FRONT_END_ROLE_LABEL);
    });

    it(`should redirect to the /${FRONT_END_ROLE} route`, () => {
      cy.getByTestId(`${FRONT_END_ROLE}-button`).click();
      cy.location('pathname').should('eq', `/${FRONT_END_ROLE}`);
    });

  });

  describe(`${BACK_END_ROLE} role button`, () => {

    it('should have correct caption', () => {
      cy.getByTestId(`${BACK_END_ROLE}-button`).should('have.text', BACK_END_ROLE_LABEL)
    });

    it(`should redirect to the /${BACK_END_ROLE} route`, () => {
      cy.getByTestId(`${BACK_END_ROLE}-button`).click();
      cy.location('pathname').should('eq', `/${BACK_END_ROLE}`);
    });

  });

  describe(`${DEV_OPS_ROLE} role button`, () => {

    it('should have correct caption', () => {
      cy.getByTestId(`${DEV_OPS_ROLE}-button`).should('have.text', DEV_OPS_ROLE_LABEL)
    });

    it(`should redirect to the /${DEV_OPS_ROLE} route`, () => {
      cy.getByTestId(`${DEV_OPS_ROLE}-button`).click();
      cy.location('pathname').should('eq', `/${DEV_OPS_ROLE}`);
    });

  });

});
