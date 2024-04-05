import {GENDERS, HOBBIES, registrationPage, TIME} from "../../pages/RegistrationPage";
import {generateUserData} from "../../helpers/commands";
import {resultsPage} from "../../pages/ResultsPage";
import {basePage} from "../../pages/BasePage";

let testUser;

describe('Registration positive tests', () => {
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

    cy.url({ timeout: 6000 }).should('include', resultsPage.url);

    resultsPage.elements.genderName(GENDERS.male).should('be.visible');
  });

  it('Should be possible to register with "Female" gender', () => {
    registrationPage.fillUsernameInput(testUser.username);
    registrationPage.fillPasswordInput(testUser.password);

    registrationPage.chooseGender(GENDERS.female);

    registrationPage.chooseTime(TIME.noon);

    registrationPage.clickOnSubmitBtn();

    cy.url({ timeout: 6000 }).should('include', resultsPage.url);

    resultsPage.elements.genderName(GENDERS.female).should('be.visible');
  });

  it('Should be possible to register with one hobby', () => {
    registrationPage.fillUsernameInput(testUser.username);
    registrationPage.fillPasswordInput(testUser.password);

    registrationPage.chooseGender(GENDERS.male);

    registrationPage.chooseHobby(HOBBIES.reading);

    registrationPage.chooseTime(TIME.morning);

    registrationPage.clickOnSubmitBtn();

    cy.url({ timeout: 6000 }).should('include', resultsPage.url);

    resultsPage.elements.hobbyNames(HOBBIES.reading);
  });

  it('Should be possible to register with two hobbies', () => {
    registrationPage.fillUsernameInput(testUser.username);
    registrationPage.fillPasswordInput(testUser.password);

    registrationPage.chooseGender(GENDERS.male);

    registrationPage.chooseHobby(HOBBIES.reading);
    registrationPage.chooseHobby(HOBBIES.music);

    registrationPage.chooseTime(TIME.evening);

    registrationPage.clickOnSubmitBtn();

    cy.url({ timeout: 6000 }).should('include', resultsPage.url);

    resultsPage.elements.hobbyNames(`${HOBBIES.reading},${HOBBIES.music}`);
  });

  it('Should be possible to register with three hobbies', () => {
    registrationPage.fillUsernameInput(testUser.username);
    registrationPage.fillPasswordInput(testUser.password);

    registrationPage.chooseGender(GENDERS.male);

    registrationPage.chooseHobby(HOBBIES.reading);
    registrationPage.chooseHobby(HOBBIES.music);
    registrationPage.chooseHobby(HOBBIES.sports);

    registrationPage.chooseTime(TIME.evening);

    registrationPage.clickOnSubmitBtn();

    cy.url({ timeout: 6000 }).should('include', resultsPage.url);

    resultsPage.elements.hobbyNames(`${HOBBIES.reading},${HOBBIES.sports},${HOBBIES.music}`);
  });

  it('Should be possible to register without choosing hobby', () => {
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

  it('Should be possible to register with "Morning" time value', () => {
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

  it('Should be possible to register with "Noon" time value', () => {
    registrationPage.fillUsernameInput(testUser.username);
    registrationPage.fillPasswordInput(testUser.password);

    registrationPage.chooseGender(GENDERS.male);

    registrationPage.chooseTime(TIME.noon);

    registrationPage.clickOnSubmitBtn();

    cy.url({ timeout: 6000 }).should('include', resultsPage.url);

    resultsPage.elements.greetingsTitle().should('contain.text', testUser.username);
    resultsPage.elements.genderName(GENDERS.male).should('be.visible');
    resultsPage.elements.timeName(TIME.noon).should('be.visible');
  });

  it('Should be possible to register with "Evening" time value', () => {
    registrationPage.fillUsernameInput(testUser.username);
    registrationPage.fillPasswordInput(testUser.password);

    registrationPage.chooseGender(GENDERS.male);

    registrationPage.chooseTime(TIME.evening);

    registrationPage.clickOnSubmitBtn();

    cy.url({ timeout: 6000 }).should('include', resultsPage.url);

    resultsPage.elements.greetingsTitle().should('contain.text', testUser.username);
    resultsPage.elements.genderName(GENDERS.male).should('be.visible');
    resultsPage.elements.timeName(TIME.evening).should('be.visible');
  });

  it('Should be possible to choose only one gender', () => {
    registrationPage.chooseGender(GENDERS.male);
    registrationPage.elements.maleRadioBtn().should('be.checked');
    registrationPage.elements.femaleRadioBtn().should('not.be.checked');
  });

  it('Should be possible to verify that only one hobby is selected when user clicks on the checkbox', () => {
    registrationPage.chooseHobby(HOBBIES.reading);

    registrationPage.elements.hobbyItemCheckbox(HOBBIES.reading).should('be.checked');
    registrationPage.elements.hobbyItemCheckbox(HOBBIES.music).should('not.be.checked');
    registrationPage.elements.hobbyItemCheckbox(HOBBIES.sports).should('not.be.checked');
  });
});

describe('Registration negative tests', () => {
  beforeEach(() => {
    testUser = generateUserData();

    registrationPage.navigateToPage();
  });

  it('Should not be possible to register without choosing time dropdown', () => {
    registrationPage.fillUsernameInput(testUser.username);
    registrationPage.fillPasswordInput(testUser.password);

    registrationPage.chooseGender(GENDERS.male);

    registrationPage.clickOnSubmitBtn();

    cy.url().should('equal', Cypress.config().baseUrl + '/');

    registrationPage.elements.usernameLabel().should('be.visible');
    registrationPage.elements.usernameInput().should('be.visible');
    registrationPage.elements.passwordLabel().should('be.visible');
    registrationPage.elements.passwordInput().should('be.visible');
  });

  it('Should not be possible to register without choosing username field', () => {
    registrationPage.fillUsernameInput(testUser.username);

    registrationPage.chooseGender(GENDERS.male);

    registrationPage.clickOnSubmitBtn();

    cy.url().should('equal', Cypress.config().baseUrl + '/');

    registrationPage.elements.usernameLabel().should('be.visible');
    registrationPage.elements.usernameInput().should('be.visible');
    registrationPage.elements.passwordLabel().should('be.visible');
    registrationPage.elements.passwordInput().should('be.visible');
  });

  it('Should not be possible to register without choosing password field', () => {
    registrationPage.fillPasswordInput(testUser.password);

    registrationPage.chooseGender(GENDERS.male);

    registrationPage.clickOnSubmitBtn();

    cy.url().should('equal', Cypress.config().baseUrl + '/');

    registrationPage.elements.usernameLabel().should('be.visible');
    registrationPage.elements.usernameInput().should('be.visible');
    registrationPage.elements.passwordLabel().should('be.visible');
    registrationPage.elements.passwordInput().should('be.visible');
  });

  it('Should not be possible to register without choosing gender', () => {
    registrationPage.fillUsernameInput(testUser.username);
    registrationPage.fillPasswordInput(testUser.password);

    registrationPage.clickOnSubmitBtn();

    cy.url().should('equal', Cypress.config().baseUrl + '/');

    registrationPage.elements.usernameLabel().should('be.visible');
    registrationPage.elements.usernameInput().should('be.visible');
    registrationPage.elements.passwordLabel().should('be.visible');
    registrationPage.elements.passwordInput().should('be.visible');
  });

  it('Should not be possible to register without choosing any value', () => {
    registrationPage.clickOnSubmitBtn();

    cy.url().should('equal', Cypress.config().baseUrl + '/');

    registrationPage.elements.usernameLabel().should('be.visible');
    registrationPage.elements.usernameInput().should('be.visible');
    registrationPage.elements.passwordLabel().should('be.visible');
    registrationPage.elements.passwordInput().should('be.visible');
  });
});