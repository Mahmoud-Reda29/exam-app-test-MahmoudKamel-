import { faker } from "@faker-js/faker/locale/en";

describe("Register Page - User Registration", () => {
       // Generate random user data for registration
       const firstName = faker.person.firstName(); 
       const lastName = faker.person.lastName();
       const username = faker.internet.userName();
       const email = faker.internet.email({firstName, lastName});
       const phone = "01012345678"; // Example Egyptian phone number
       const password = "@Test1234"; // Example strong password
       
       beforeEach(() => {
              cy.visit(`${Cypress.env("DOMAIN")}/auth/register`);
       });

       it("should register a new user", () => {
              cy.intercept("POST", `https://exam.elevateegy.com/api/v1/auth/signup`).as("registerRequest");
              
              cy.get("#firstName").type(firstName);
              cy.get("#lastName").type(lastName);
              cy.get("#username").type(username);
              cy.get("#email").type(email);
              cy.get("#phone").type(phone); 
              cy.get("#password").type(password); 
              cy.get("#confirm-password").type(password);

              cy.get("form > button").click();

              cy.wait("@registerRequest", ).then((interception) => {
                     expect(interception.response?.statusCode).to.equal(200);
                     expect(interception.response?.body).to.have.property("message", "success");
              });
       });

});
