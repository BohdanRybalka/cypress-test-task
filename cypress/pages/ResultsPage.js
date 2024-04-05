import {BasePage} from "./BasePage";

export class ResultsPage extends BasePage{
    url = 'results';

    elements = {
        greetingsTitle: () => cy.get('h1'),
        genderName: (gender) => cy.get('tr:nth-child(1) td').contains(gender),
        hobbyNames: (hobbies) => cy.get('tr:nth-child(2) td').contains(hobbies),
        timeName: (time) => cy.get('tr:nth-child(3) td').contains(time),
    };
}

export const resultsPage = new ResultsPage();