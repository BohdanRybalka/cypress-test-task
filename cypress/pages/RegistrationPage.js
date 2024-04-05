import {BasePage} from "./BasePage";

export const HOBBIES = {
    reading: 'Reading',
    sports: 'Sports',
    music: 'Music'
};

export const TIME = {
  morning: 'Morning',
  noon: 'Noon',
  evening: 'Evening'
};

export const GENDERS = {
    male: 'Male',
    female: 'Female'
};

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
        submitBtn: () => cy.get('button[type="submit"]')
    }

    clickOnSubmitBtn(){
        return this.elements.submitBtn().click();
    }

    fillUsernameInput(username){
        return this.elements.usernameInput().type(username);
    }

    fillPasswordInput(password){
        return this.elements.passwordInput().type(password);
    }

    chooseGender(gender){
        switch (gender) {
            case GENDERS.male:
                return this.elements.maleRadioBtn().click();
            case GENDERS.female:
                return this.elements.femaleRadioBtn().click();
            default:
                throw new Error('Invalid gender: ' + gender);
        }
    }

    chooseHobby(hobbyName){
        return this.elements.hobbyItemCheckbox(hobbyName).check();
    }

    chooseTime(time){
        return this.elements.timeDropdown().select(time);
    };
}

export const registrationPage = new RegistrationPage();