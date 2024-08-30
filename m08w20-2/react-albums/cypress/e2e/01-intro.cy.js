describe('basic tests for cypress', () => {

  it('can see if true is equal to true', () => {
    expect(true).to.equal(true);
  });

  it('can visit the homepage', () => {
    cy.visit('http://localhost:8765/')
  });

})
