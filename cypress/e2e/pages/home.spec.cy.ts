describe("Home Page - API Integration and Card Rendering Tests", () => {
       it("visit route application", () => {
              cy.visit(Cypress.env("DOMAIN"));
       });

       // Step 1: request the API call
       it("should fetch data for render Card components based on it", () => {
              cy.request("GET", Cypress.env("DOMAIN"))
              .its("status")
              .should("equal", 200);
       });

       // Step 2: cards is more than 0
       it("make sure that the number of cards dealt is greater than 0", () => {
              cy.visit(Cypress.env("DOMAIN"));
              cy.get("#diplomas").should("exist").within(()=> {
                     cy.get(".item").should("have.length.greaterThan", 0);
              });
       });
});