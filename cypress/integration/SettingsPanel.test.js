/* global cy*/

describe('SettingsPanel', () => {
  beforeEach(() => {
    cy.visit('/frontend');
  });

  describe(`GearButton`, () => {
    it('should open SettingsPannel', () => {
      cy.getByTestId('gear-button').click();

      cy.getByTestId('side-panel').should('exist');
    });
  });

  describe(`CloseButton`, () => {
    it('should close SettingsPannel', () => {
      cy.getByTestId('gear-button').click();

      cy.getByTestId('close-button').click();

      cy.getByTestId('side-panel').should('not.exist');
    });
  });

  describe('GenderSettings', () => {
    beforeEach(() => {
      cy.getByTestId('gear-button').click();
    });

    it('should show flower when female gender is selected', () => {
      cy.getByTestId('female-button').click();

      cy.getByTestId('gender-flower-icon').should('exist');
    });

    it('should hide flower when male gender is selected', () => {
      cy.getByTestId('male-button').click();

      cy.getByTestId('gender-flower-icon').should('not.exist');
    });
  });
});
