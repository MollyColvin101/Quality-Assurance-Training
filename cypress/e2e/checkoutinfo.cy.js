describe("valid login", () => {
    it ("should log in successfully", () => {
      cy.visit("https://www.saucedemo.com/")
      cy.get('[data-test="username"]').type("standard_user")
      cy.get('[data-test="password"]').type("secret_sauce")
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="shopping-cart-link"]').click();
      cy.get('[data-test="checkout"]').click();
      cy.get('[data-test="firstName"]').click();
      cy.get('[data-test="Molly"]').type();
      cy.get('[data-test="lastName"]').click();
      cy.get('[data-test="Colvin"]').type();
      cy.get('[data-test="postalCode"]').click();
      cy.get('[data-test="28806"]').type();
      cy.get('[data-test="continue"]').click();



      

    })
})