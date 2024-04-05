import {GENDERS, HOBBIES, registrationPage, TIME} from "../../pages/RegistrationPage";
import {generateUserData} from "../../helpers/commands";
import {resultsPage} from "../../pages/ResultsPage";

describe('Registration tests', () => {
  let testUser;

  beforeEach(() => {
    testUser = generateUserData();

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
    registrationPage.elements.hobbyItemName(HOBBIES.reading).should('be.visible');
    registrationPage.elements.hobbyItemName(HOBBIES.sports).should('be.visible');
    registrationPage.elements.hobbyItemName(HOBBIES.music).should('be.visible');
    registrationPage.elements.hobbyItemCheckbox(HOBBIES.reading).should('be.visible');
    registrationPage.elements.hobbyItemCheckbox(HOBBIES.sports).should('be.visible');
    registrationPage.elements.hobbyItemCheckbox(HOBBIES.music).should('be.visible');

    registrationPage.elements.timeLabel().should('be.visible');
    registrationPage.elements.timeDropdown().should('be.visible');

    registrationPage.elements.submitBtn().should('be.visible');
  });

  it('Should be possible to register', () => {
    registrationPage.fillUsernameInput(testUser.username);
    registrationPage.fillPasswordInput(testUser.password);

    registrationPage.chooseGender(GENDERS.male);

    registrationPage.chooseTime(TIME.morning);

    registrationPage.clickOnSubmitBtn();

    cy.url({ timeout: 6000 }).should('include', resultsPage.url);

    resultsPage.elements.greetingsTitle().should('contain.text', testUser.username);
    resultsPage.elements.genderName(GENDERS.male).should('be.visible');
    resultsPage.elements.timeName(TIME.morning).should('be.visible');
  });

  it('Should be possible to register with "Male" gender', () => {
    registrationPage.fillUsernameInput(testUser.username);
    registrationPage.fillPasswordInput(testUser.password);

    registrationPage.chooseGender(GENDERS.male);

    registrationPage.chooseTime(TIME.morning);

    registrationPage.clickOnSubmitBtn();

    resultsPage.elements.genderName(GENDERS.male).should('be.visible');
  });

  it('Should be possible to register with "Female" gender', () => {
    registrationPage.fillUsernameInput(testUser.username);
    registrationPage.fillPasswordInput(testUser.password);

    registrationPage.chooseGender(GENDERS.female);

    registrationPage.chooseTime(TIME.noon);

    registrationPage.clickOnSubmitBtn();

    resultsPage.elements.genderName(GENDERS.female).should('be.visible');
  });
});
