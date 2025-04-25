import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { RegistrationPage } from "../pageObjects/RegistrationPage";
import { BasketPage } from "../pageObjects/BasketPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";


describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {

      // Click Account button
      HomePage.accountButton.click();

      // Click Login button
      HomePage.loginButton.click();

      // Set email value to "demo"
      LoginPage.emailField.type("demo");

      // Set password value to "demo"
      LoginPage.passwordField.type("demo");

      // Click Log in
      LoginPage.loginButton.click();

      // Click Account button
      HomePage.accountButton.click();

      // Validate that "demo" account name appears in the menu section
      HomePage.verifyAcount.should("contain.text", "demo");
    });

    it("Registration", () => {

      // Click Account button
      HomePage.accountButton.click();

      // Login button
      HomePage.loginButton.click();

      // Click "Not yet a customer?"
      LoginPage.GuestLink.click();

      // Find - how to generate random number in JS
      const randomNumber = Math.floor(Math.random() * 900000) + 100000;

      // Use that number to genarate unique email address, e.g.: email7584@ebox.com
      const emailAddress = `email${randomNumber}@ebox.com`;

      // Save that email address to some variable
      RegistrationPage.emailField.type(emailAddress);

      // Fill in password field and repeat password field with same password
      const password = "ABC123#()";
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password)

      // Click on Security Question menu
      RegistrationPage.securityQuestionField.click();

      // Select  "Name of your favorite pet?"
      RegistrationPage.securityQuestions.contains("Name of your favorite pet?").click();

      // Fill in answer
      RegistrationPage.answerField.type("Cat");

      // Click Register button
      RegistrationPage.registrationButton.click();

      // Set email value to previously created email
      LoginPage.emailField.type(emailAddress);

      // Set password value to previously used password value
      LoginPage.passwordField.type(password);

      // Click login button
      LoginPage.loginButton.click();
      
      // Click Account button
      HomePage.accountButton.click();

      // Validate that account name (with previously created email address) appears in the menu section userProfileButton
      HomePage.verifyAcount.should("contain.text", emailAddress);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchIcon.click();

      // Search for Lemon
      HomePage.searchField.type("Lemon{enter}");

      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();

      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search 500ml and validate Lemon, while having multiple cards", () => {

      // Click on search icon
      HomePage.searchIcon.click();
  
      // Search for 500ml
      HomePage.searchField.type("500ml{enter}");
  
      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
  
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");
  
    });

    // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards", () => {

      // Click on search icon
      HomePage.searchIcon.click();

      // Search for 500ml
      HomePage.searchField.type("500ml{enter}");

      // Select a product card - Eggfruit Juice (500ml)
      HomePage.productBox.contains("Eggfruit Juice (500ml)").click();

      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.productInfo.should("contain.text", "Now with even more exotic flavour.");

      // Close the card
      HomePage.closeButton.click();

      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();

      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");

      // Close the card
      HomePage.closeButton.click();

      // Select a product card - Strawberry Juice (500ml)
      HomePage.productBox.contains("Strawberry Juice (500ml)").click();

      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.productInfo.should("contain.text", "Sweet & tasty!");
      HomePage.closeButton.click();
    });

    // Create scenario - Read a review
    it("Read a review", () => {

      // Click on search icon
      HomePage.searchIcon.click();

      // Search for King
      HomePage.searchField.type("King{enter}");

      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.productBox.contains('OWASP Juice Shop "King of the Hill" Facemask').click();

      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.clickReviewButton.click();

      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.productInfo.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");

    });

    // Create scenario - Add a review
    it("Adding a review", () => {

      // Click on search icon
      HomePage.searchIcon.click();

      // Search for Raspberry
      HomePage.searchField.type("King{enter}");

      // Select a product card - Raspberry Juice (1000ml)
      HomePage.productBox.contains('OWASP Juice Shop "King of the Hill" Facemask').click();

      // Type in review - "Tastes like metal"
      HomePage.writeReview.click().type("Tastes like metal");

      // Click Submit
      HomePage.clickSubmitButton.click();

      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.clickReviewButton.click();

      // Validate review -  "Tastes like metal"
      HomePage.productInfo.should("contain.text", "Tastes like metal");
    });

    // Create scenario - Validate product card amount
    it("Validate product card amount", () => {

      // Validate that the default amount of cards is 12
      HomePage.validatedefault.should("contain.text", " 1 – 12");

      // Change items per page (at the bottom of page) to 24
      HomePage.clicktochangedefault.click();
      HomePage.changedefault.contains("24").click();

      // Validate that the amount of cards is 24
      HomePage.validatedefault.should("contain.text", " 1 – 24");

      // Change items per page (at the bottom of page) to 36
      HomePage.clicktochangedefault.click();
      HomePage.changedefault.contains("36").click();

      // Validate that the amount of cards is 35
      HomePage.validatedefault.should("contain.text", " 1 – 36");
    });

    // Create scenario - Buy Girlie T-shirt
    it("Buy Girlie T-shirt", () =>{

      // Click on search icon
      HomePage.searchIcon.click();

      // Search for Girlie
      HomePage.searchField.type("Girlie{enter}");

      // Add to basket "Girlie"
      HomePage.buyproduct.click();

      // Click on "Your Basket" button
      HomePage.clickBasket.eq(0).click();

      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.clickCheckout.click();

      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.selectAddress.eq(0).click();

      // Click Continue button
      SelectAddressPage.clickContinue.click();

      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.selectDelivery.eq(2).click();

      // Click Continue button
      DeliveryMethodPage.clickContinue.click();

      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.selectCard.eq(0).click();

      // Click Continue button
      PaymentOptionsPage.clickContinue.click();

      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.clickPlaceYourOrder.click();

      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.validateConfermation.should('contain.text', "Thank you for your purchase!");
    });

    // Create scenario - Add address
    it('Add address', () => {

      // Click on Account
      HomePage.accountButton.click();

      // Click on Orders & Payment
      HomePage.clickOrders.eq(1).click();

      // Click on My saved addresses
      HomePage.mySavedAddresses.eq(6).click();

      // Create page object - SavedAddressesPage
      // Click on Add New Address
      SavedAddressesPage.clickAddAdress.click();

      // Create page object - CreateAddressPage
      // Fill in the necessary information
      CreateAddressPage.typeText.eq(1).type('Latvia');
      CreateAddressPage.typeText.eq(2).type('Arturs Gailitis');
      CreateAddressPage.typeText.eq(3).type('20 376 395');
      CreateAddressPage.typeText.eq(4).type('3345');
      CreateAddressPage.typeAddress.type('Miera iela 18');
      CreateAddressPage.typeText.eq(5).type('Valmiera');
      CreateAddressPage.typeText.eq(6).type('Valmieras novads');

      // Click Submit button
      CreateAddressPage.clickSubmit.click();
      
      // Validate that previously added address is visible
      SavedAddressesPage.verifyAddress.eq(5).should('contain.text', 'Arturs Gailitis');
      SavedAddressesPage.verifyAddress.eq(6).should('contain.text', 'Miera iela 18, Valmiera, Valmieras novads, 3345')
      SavedAddressesPage.verifyAddress.eq(7).should('contain.text', 'Latvia');
    });

    // Create scenario - Add payment option
    it('Add payment optioen', () => {

      // Click on Account
      HomePage.accountButton.click();

      // Click on Orders & Payment
      HomePage.clickOrders.eq(1).click();

      // Click on My payment options
      HomePage.mySavedAddresses.eq(7).click();

      // Create page object - SavedPaymentMethodsPage
      // Click Add new card
      SavedPaymentMethodsPage.expandNewCard.click();

      // Fill in Name
      SavedPaymentMethodsPage.typeText.eq(1).type('Credit Card');

      // Fill in Card Number
      SavedPaymentMethodsPage.typeText.eq(2).type('1234567890987654');

      // Set expiry month to 7
      SavedPaymentMethodsPage.clickDate.eq(0).select('7');

      // Set expiry year to 2090
      SavedPaymentMethodsPage.clickDate.eq(1).select('2090');

      // Click Submit button
      SavedPaymentMethodsPage.clickSubmit.click();

      // Validate that the card shows up in the list
      SavedPaymentMethodsPage.verifyPaymentMethod.eq(4).should('contain.text', '************7654');
      SavedPaymentMethodsPage.verifyPaymentMethod.eq(5).should('contain.text', 'Credit Card');
      SavedPaymentMethodsPage.verifyPaymentMethod.eq(6).should('contain.text', '7/2090');
    })
  });
});
