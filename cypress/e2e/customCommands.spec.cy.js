describe("log in with correct email, password and submit", () => {
    it ("should log in successfully", () => {
              cy.visit("https://www.saucedemo.com/")
              cy.get('input["standard_user"]').type(username);
              cy.get('input["secret_sauce"]').type(password);
              cy.get('form').submit();

    })
})

