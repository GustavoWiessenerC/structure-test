
describe("Suite in demo project - API", () => {
  beforeEach(() => {
    cy.login(Cypress.env("user"), Cypress.env("senha"));
  });

  it.only("Start page in login feature in only", () => {
    cy.isLogedUser();
  });

  it("Start page in login feature is not only", () => {
    cy.isLogedUser();
  });
});
