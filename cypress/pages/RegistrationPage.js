import {BasePage} from "./BasePage";

export class RegistrationPage extends BasePage{
    url = '/';

    elements = {
        yourAverageFormTitle: () => cy.get('h1').contains('Your average form')
    }
}

export const registrationPage = new RegistrationPage();