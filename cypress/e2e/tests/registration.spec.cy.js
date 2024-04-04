import {hobbies, registrationPage} from "../../pages/RegistrationPage";

describe('Registration e2e', () => {
  beforeEach(() => {
    registrationPage.navigateToPage();
  });

  it('Should be possible to navigate to the registration page', () => {
    registrationPage.elements.yourAverageFormTitle().should('be.visible');
  });

  it('Should be possible to see credentials, gender, hobbies and time sections on the registration page', () => {
    registrationPage.elements.usernameLabel().should('be.visible');
    registrationPage.elements.usernameInput().should('be.visible');
    registrationPage.elements.passwordLabel().should('be.visible');
    registrationPage.elements.passwordInput().should('be.visible');

    registrationPage.elements.genderLabel().should('be.visible');
    registrationPage.elements.maleRadioBtn().should('be.visible');
    registrationPage.elements.femaleRadioBtn().should('be.visible');

    registrationPage.elements.hobbyLabel().should('be.visible');
    registrationPage.elements.hobbyItemName(hobbies.reading).should('be.visible');
    registrationPage.elements.hobbyItemName(hobbies.sports).should('be.visible');
    registrationPage.elements.hobbyItemName(hobbies.music).should('be.visible');
    registrationPage.elements.hobbyItemCheckbox(hobbies.reading).should('be.visible');
    registrationPage.elements.hobbyItemCheckbox(hobbies.sports).should('be.visible');
    registrationPage.elements.hobbyItemCheckbox(hobbies.music).should('be.visible');

    registrationPage.elements.timeLabel().should('be.visible');
    registrationPage.elements.timeDropdown().should('be.visible');

    registrationPage.elements.submitBtn().should('be.visible');
  });
});
