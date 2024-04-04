import {BasePage} from "./BasePage";

export const hobbies = {
    reading: 'Reading',
    sports: 'Sports',
    music: 'Music'
}

export class RegistrationPage extends BasePage {
    url = '/';

    elements = {
        yourAverageFormTitle: () => cy.get('h1').contains('Your average form'),
        usernameLabel: () => cy.get('label').contains('Username:'),
        usernameInput: () => cy.get('#username'),
        passwordLabel: () => cy.get('label').contains('Password:'),
        passwordInput: () => cy.get('#password'),
        genderLabel: () => cy.get('label').contains('Gender:'),
        maleRadioBtn: () => cy.get('#genderMale'),
        femaleRadioBtn: () => cy.get('#genderFemale'),
        hobbyLabel: () => cy.get('label').contains('Hobbies:'),
        hobbyItemName: (hobbyName) => cy.get('td').contains(hobbyName),
        hobbyItemCheckbox: (hobbyName) => cy.get(`input[value=${hobbyName}]`),
        timeLabel: () => cy.get('label').contains('Time:'),
        timeDropdown: () => cy.get('#time'),
        submitBtn: () => cy.get('button').type('submit')
    }
}

export const registrationPage = new RegistrationPage();