Cypress.Commands.add('loginWithCredentials', (username, password) => {
    cy.visit('https://www.saucedemo.com/'); 
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('form').submit(); 
});