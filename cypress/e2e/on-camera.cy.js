describe("template spec", () => {
  beforeEach(() => {
    cy.visit("");
    cy.get('[data-cy="email-input-form"]').as("emailInput");
    cy.get('[data-cy="password-input-form"]').as("passwordInput");
    cy.get('[data-cy="sign-in-button"]').as("btnSignIn");
  });

  it("Should open camera if email and password are valid", () => {
    cy.get("@emailInput").type("sophie@gmail.com");
    cy.get("@passwordInput").type("ValidP4ssword");
    cy.get("@btnSignIn").click();
  });
});
