import {registrationPage} from "../../pages/RegistrationPage";

describe('Registration e2e', () => {
  it('Should be possible to navigate to the registration page', () => {
    registrationPage.navigateToPage();
    registrationPage.elements.yourAverageFormTitle().should('be.visible');
  });
});
