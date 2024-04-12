describe("valid login", () => {
    it ("should log in successfully", () => {
      cy.visit("https://www.saucedemo.com/")
      cy.get('[data-test="username"]').type("standard_user")
      cy.get('[data-test="password"]').type("secret_sauce")
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="shopping-cart-link"]').click();
      cy.get('[data-test="checkout"]').click();
      

    })
})