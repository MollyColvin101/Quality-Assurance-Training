describe("frame functionality", () => {
    it ("gets the post", () => {
     cy.visit("https://demoqa.com/frames")
     cy.get('#framesWrapper > :nth-child(2)')
     cy.get('#frame2')
    })
})