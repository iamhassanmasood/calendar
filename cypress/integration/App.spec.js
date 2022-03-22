describe("Application render test via cypress", () => {
  it("test class existing", () => {
    cy.visit("/");
    cy.get("#root").should("exist");
  });
  it("check calendar components by cypress", () => {
    cy.visit("/");
    cy.get(
      ".slick-current > :nth-child(1) > .ant-col > .ant-card > .ant-card-body > .date-title-head"
    ).click();
  });
  it("check click on left icon", () => {
    cy.visit("/");
    cy.get(".anticon-left > svg ").click();
  });
  it("check click on right icon", () => {
    cy.visit("/");
    cy.get(".anticon-right > svg").click();
  });
  it("check clicking on carousel row", () => {
    cy.visit("/");
    cy.get(".ant-row > .anticon > svg").click();
  });
  it.only("check inputs", () => {
    cy.visit("/");
    cy.get('[data-icon="down"]').click();
    cy.get('[placeholder="Select time"]').click();
    cy.get(".ant-picker-now-btn").click();
  });
});
