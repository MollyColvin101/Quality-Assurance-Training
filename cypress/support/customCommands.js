Cypress.Commands.add('loginWithCredentials', (email, username, password) => {
    cy.visit('https://www.saucedemo.com/'); 
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('form').submit(); 
});