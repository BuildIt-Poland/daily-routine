/* global cy*/

import { FRONT_END_ROLE } from '../../src/constants/roles';
import { BRAG } from '../../src/constants/roleActions';

describe('QuoteBubble', () => {

  beforeEach(function() {
    cy.visit(`/${FRONT_END_ROLE}/${BRAG}`, {
      onBeforeLoad(win) {
        cy.stub(win, 'open').as('windowOpen')
      }
    })
  });

  describe('when Facebook share link is clicked', () => {
    it('should open suitable Facebook share window', () => {
      cy.getByTestId('facebook-share-button').click();
      cy.get('@windowOpen').should('be.calledWithMatch', 'http://www.facebook.com/');
    });
  })

  describe('when Twitter share link is clicked', () => {
    it('should open suitable Twitter share window', () => {
      cy.getByTestId('twitter-share-button').click();
      cy.get('@windowOpen').should('be.calledWithMatch', 'http://www.twitter.com/');
    });
  })

  // describe('when Copy-to-clipboard button is clicked ', () => {
  //   it('should show notification', () => {
  //     cy.getByTestId('copy-to-clipboard-button').click();
  //     cy.getByTestId('copy-notification').should('exist');
  //   });
  // })

});
