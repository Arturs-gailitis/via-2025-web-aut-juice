import { BasePage } from "./basePage";

export class BasketPage extends BasePage {
    static get url() {
        return "/#/basket";
    }

    static get clickCheckout() {
        return cy.get('button:contains("Checkout")');
    }
}