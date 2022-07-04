<reference types="cypress" />

describe('speech-to-text function', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/API-Playbook/alerting')
    })

    it('is paused has a default  value of false', () => {
        cy.get('.todo-list li').should('have.length', 2)
        cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
        cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
      })
})

