
export class BasePage {
    url = '/';

    navigateToPage(){
        return cy.visit(this.url);
    }
}

export const basePage = new BasePage();