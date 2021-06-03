describe('Change local',()=>{
    it('should chage local langue',()=>{
        cy.visit('/');

        cy.get('*[data-cy=change]')
        .should('be.visible')
        .click()
        .location('pathname')
        .should('eq','/cn')

        cy.get('*[data-cy=change]')
        .should('be.visible')
        .click()
        .location('pathname')
        .should('eq','/');
    })
})