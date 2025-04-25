import { BasePage } from "./basePage";

export class SelectAddressPage extends BasePage {
    static get url() {
        return '/#/address/select';
    }

    static get selectAddress() {
        return cy.get("input.mdc-radio__native-control");
    }

    static get clickContinue() {
        return cy.get('button:contains("Continue")');
    }
}