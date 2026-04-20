export class AdvancedElementsPage {

  // ---------- NAVIGATION ----------

  visitShadowDom() {
    cy.visit('/shadowdom');
  }

  visitNestedFrames() {
    cy.visit('/nested_frames');
  }

  // ---------- SHADOW DOM ----------

  getShadowText() {
    return cy.get('span[slot="my-text"]');
  }

  verifyShadowText() {
    this.getShadowText()
      .should('contain.text', "Let's have some different text!");
  }

  // ---------- NESTED FRAMES ----------

  getMiddleFrameBody() {
    // First switch to TOP frame
    return cy.getFrameBody('frame[name="frame-top"]')
      .find('frame[name="frame-middle"]')
      .then(($frame) => {
        const doc = ($frame[0] as HTMLIFrameElement).contentDocument;
        return cy.wrap(doc!.body);
      });
  }

  verifyMiddleFrameText() {
    this.getMiddleFrameBody()
      .should('contain.text', 'MIDDLE');
  }
}