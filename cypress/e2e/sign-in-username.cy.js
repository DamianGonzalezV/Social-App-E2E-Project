describe("Sign in username screen", () => {
  beforeEach(() => {
    cy.visit("");
    cy.get('[data-cy="sign-up-button"]').click();
    cy.get('[data-cy="name-input"]').type("Jane Doe");
    cy.get('[data-cy="name-continue"]').click();
    cy.get('[data-cy="bd-input"]').type("2006-01-01");
    cy.get('[data-cy="bd-continue"]').click();
  });

  it("Should verify element visibility on username screen", () => {
    cy.get('[data-cy="sign-up-birthdate"]').should("not.be.visible");
    cy.get('[data-cy="sign-up-username"]').should("be.visible");
    cy.get('[data-cy="username-label"]').should(
      "contain.text",
      "Add a username"
    );
    cy.get('[data-cy="username-input"]').should("be.visible");
    cy.get('[data-cy="username-continue"]').should("be.visible");
  });

  it("Should verify username is able to add username and continue", () => {
    cy.get('[data-cy="username-input"]').type("Jane Doe");
    cy.get('[data-cy="username-continue"]').click();
  });
});
