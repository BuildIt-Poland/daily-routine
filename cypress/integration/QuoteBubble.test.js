/* global cy*/

import { FRONT_END_ROLE } from '../../src/constants/roles';
import { BRAG } from '../../src/constants/roleActions';

describe('QuoteBubble', () => {

  beforeEach(function() {
    cy.visit(`/${FRONT_END_ROLE}/${BRAG}`, {
      onBeforeLoad (win) {
        cy.stub(win, 'open').as('windowOpen')
      }
    });
    cy.getByTestId('frontend-brag-button').click();
  });

  // Works locally
  // Fails on CI due to:
  // CypressError: cy.get() could not find a registered alias for: '@windowOpen'. You have not aliased anything yet.
  describe('when Facebook share link is clicked', () => {
    it('should open suitable Facebook share window', () => {

      cy.getByTestId('facebook-share-button').click();
      cy.get('@windowOpen').should('be.calledWithMatch', 'http://www.facebook.com/');
    });
  })

  // Works locally
  // Fails on CI due to:
  // CypressError: cy.get() could not find a registered alias for: '@windowOpen'. You have not aliased anything yet.
  describe('when Twitter share link is clicked', () => {
    it('should open suitable Twitter share window', () => {
      cy.getByTestId('twitter-share-button').click();
      cy.get('@windowOpen').should('be.calledWithMatch', 'http://www.twitter.com/');
    });
  })

  // Fails locally:
  // Stuck on confirmation modal triggered by clicking on copy button
  describe('when Copy-to-clipboard button is clicked ', () => {
    it('should show notification', () => {
      cy.getByTestId('copy-to-clipboard-button').click();
      cy.getByTestId('copy-notification').should('exist');
    });
  })

});
