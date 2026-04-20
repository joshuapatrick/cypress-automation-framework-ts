export class DynamicControlsPage {

  visit() {
    cy.visit('/dynamic_controls');
  }

  // ---------- CHECKBOX ----------

  clickRemove() {
    cy.contains('button', 'Remove').click();
  }

  verifyCheckboxGone() {
    cy.get('#checkbox', { timeout: 10000 }).should('not.exist');
    cy.contains("It's gone!", { timeout: 10000 }).should('be.visible');
  }

  // ---------- INPUT ----------

  clickEnable() {
    cy.contains('button', 'Enable').click();
  }

  getInput() {
    return cy.get('input[type="text"]');
  }

  typeInput(text: string) {
    this.getInput()
      .should('be.disabled');

    cy.get('input[type="text"]', { timeout: 10000 })
      .should('be.enabled')   // guard (core requirement)
      .clear()
      .type(text);
  }

  verifyInputValue(text: string) {
    this.getInput().should('have.value', text);
  }
}