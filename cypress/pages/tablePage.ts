export class TablePage {

  // ---------- NAVIGATION ----------
  visit() {
    cy.visit('/challenging_dom');
  }

  // ---------- TABLE ACTIONS ----------
  clickEditByIuvaret(value: string) {
    cy.contains('td', value)
      .parent('tr')
      .within(() => {
        cy.contains('edit').click();
      });
  }

  // ---------- BUTTONS ----------
  getButtons(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.button');
  }

  clickColorButton(index: number) {
    this.getButtons().eq(index).click();
  }

  // ---------- CANVAS ----------
  getCanvas(): Cypress.Chainable<JQuery<HTMLCanvasElement>> {
    return cy.get('#canvas') as Cypress.Chainable<JQuery<HTMLCanvasElement>>;
  }

  /**
   * Capture canvas as base64 snapshot
   */
  getCanvasSnapshot(): Cypress.Chainable<string> {
    return this.getCanvas().then(($canvas) => {
      const canvas = $canvas[0];
      return canvas.toDataURL();
    });
  }

  /**
   * Debug logging (safe outside retry)
   */
  logCanvasSnapshot(label: string, data: string) {
    cy.log(`${label} length: ${data.length}`);
    cy.log(`${label} preview: ${data.slice(0, 50)}...`);
  }

  /**
   * Core assertion: canvas changed after action
   * Uses Cypress retry (no flakiness)
   */
  verifyCanvasChanged(before: string) {
    this.getCanvas().should(($canvas) => {
      const after = ($canvas[0] as HTMLCanvasElement).toDataURL();

      // Only pure JS here (no cy.*)
      expect(after).to.not.equal(before);
    });
  }
}