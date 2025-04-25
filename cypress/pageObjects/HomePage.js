import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get("button#navbarAccount")
  }

  static get loginButton() {
    return cy.get("button#navbarLoginButton")
  }

  static get verifyAcount() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchIcon() {
    return cy.get("#searchQuery");
  }

  static get searchField() {
    return cy.get("#searchQuery input");
  }

  static get productBox() {
    return cy.get("div.mdc-card");
  }
  
  static get productInfo() {
    return cy.get("app-product-details");
  }

  static get closeButton() {
    return cy.get("button[aria-label='Close Dialog']");
  }

  static get clickReviewButton() {
    return cy.get("[aria-label='Expand for Reviews']");
  }

  static get writeReview() {
    return cy.get("[aria-label='Text field to review a product']");
  }

  static get clickSubmitButton() {
    return cy.get("#submitButton");
  }

  static get validatedefault() {
    return cy.get("div.mat-mdc-paginator-range-label");
  }

  static get clicktochangedefault() {
    return cy.get("div.mat-mdc-paginator-touch-target");
  }

  static get changedefault() {
    return cy.get(".mdc-list-item__primary-text");
  }

  static get buyproduct() {
    return cy.get('button:contains("Add to Basket")');
  }

  static get clickBasket() {
    return cy.get('button:contains("Your Basket")');
  }

  static get clickOrders() {
    return cy.get('button.mat-mdc-menu-item');
  }

  static get mySavedAddresses() {
    return cy.get('button.mat-mdc-menu-item');
  }
}
