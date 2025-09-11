describe("Initial Render", () => {
       it("should load the homepage successfully", () => {
              cy.visit(Cypress.env("DOMAIN"));

              // optional: add expectations to confirm it loaded properly
              cy.get("aside").should("exist").within(()=> {
                     cy.get("a.logo").should("exist");
                     cy.get("ul.links").should("exist");
                     cy.get(".user").should("exist");
              });
       });
});
