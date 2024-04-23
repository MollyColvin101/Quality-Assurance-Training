describe("click me button functionality", () => {
    it ("clicks on button", () => {
     cy.visit("https://demoqa.com/alerts")
     cy.get('#alertButton').click();
     cy.wait(5000) // wait for 5 seconds
     cy.get('#timerAlertButton').click();
     cy.wait(5000) //wait for 5 seconds
     cy.get('#confirmButton').click();
     cy.wait(5000) // wait for 5 seconds
     cy.get('#promtButton').click();
     cy.wait(5000) // wait for 5 seconds
    })
})