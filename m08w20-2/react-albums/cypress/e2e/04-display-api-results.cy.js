it('can display the results of an api call', () => {
  // visit the homepage
  cy.visit('/');

  // setup the intercept
  cy.intercept('GET', '**/search*', { fixture: 'bruno-mars' })
    .as('bruno-mars-request');

  // find the input field and type "Bruno Mars"
  cy.get('.search__form')
    .find('input')
    .type('<script>alert("hello world")</script>');

  // wait for the GET request to resolve
  cy.wait('@bruno-mars-request');

  // check that a specific album is on the page
  cy.contains('24K Magic')

  // uncheck the explicit checkbox
  cy.get('#Explicit')
    .uncheck();

  // verify that a specific explicit album no longer appears on the page
  cy.get('article.album')
    .should('not.contain', 'Billionaire (feat. Bruno Mars)');
});