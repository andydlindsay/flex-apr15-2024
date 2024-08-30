describe('tests for the input field', () => {

  beforeEach(() => {
    cy.visit('/');

    const str = 'my-input-field';

    cy.get('.search__form')
      .find('input')
      .as(str);
  });

  it('can type into an input field', () => {
    cy.get('@my-input-field')
      .type('Carrie Underwood', { delay: 150 })
      .should('have.value', 'Carrie Underwood');
  });

  it('can handle backspace', () => {
    cy.get('@my-input-field')
      .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 150 })
      .should('have.value', 'Bee Gees');
  });

});