import { BasePage } from "./basePage";

export class SavedAddressesPage extends BasePage {
    static get url() {
        return '/#/address/saved';
    }

    static get clickAddAdress() {
        return cy.get('button:contains("Add New Address")');
    }

    static get verifyAddress() {
        return cy.get('mat-cell.mat-mdc-cell');
    }
}