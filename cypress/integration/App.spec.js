describe("Application render test via cypress", () => {
  it("test class existing", () => {
    cy.visit("/");
    cy.get("#root").should("exist");
  });
});
