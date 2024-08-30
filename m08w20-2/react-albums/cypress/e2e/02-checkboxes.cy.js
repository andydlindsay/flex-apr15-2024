describe.skip('tests for the checkboxes', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8765');
  })

  it('can toggle the explicit checkbox', () => {
    cy.get('.filters__form-group')
      .first()
      .find('input')
      .uncheck()
      .should('not.be.checked');
  });

  it('can toggle a checkbox by clicking on its label', () => {
    cy.contains('EP')
      .click();

    cy.get('#EP')
      .should('be.checked');
  });

});