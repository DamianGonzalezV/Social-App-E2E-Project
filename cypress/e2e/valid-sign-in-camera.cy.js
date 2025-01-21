describe("template spec", () => {
  beforeEach(() => {
    cy.visit("");
    cy.get('[data-cy="email-input-form"]').as("emailInput");
    cy.get('[data-cy="password-input-form"]').as("passwordInput");
    cy.get('[data-cy="sign-in-button"]').as("btnSignIn");
  });

  it("Should validate input fields and Sign in button", () => {
    cy.get("@emailInput")
      .should("exist")
      .and("have.attr", "placeholder")
      .and("have.string", "sophie@example.com");

    cy.get('[data-cy="email-condition"]').should("not.be.visible");

    cy.get("@passwordInput").should("exist");

    cy.get("@emailInput").type("InvalidEmail");
    cy.get("@btnSignIn").click();
    cy.get('[data-cy="email-condition"]')
      .invoke("text")
      .should("be.visible")
      .and("eq", "Please add email");
  });
});
