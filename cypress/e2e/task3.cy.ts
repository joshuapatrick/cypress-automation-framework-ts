import { AdvancedElementsPage } from '../pages/advancedElementsPage';

describe('Task 3 - Shadow DOM & Multi-Frame Challenge', () => {

  const page = new AdvancedElementsPage();

  it('should verify shadow DOM text and nested frame content', () => {
    cy.fixture('testData').then((data) => {
      const task3 = data.task3;

      // ---------- SHADOW DOM ----------
      page.visitShadowDom();
      page.getShadowText()
        .should('contain.text', task3.shadowText);

      // ---------- NESTED FRAMES ----------
      page.visitNestedFrames();
      page.getMiddleFrameBody()
        .should('contain.text', task3.frameText);

    });
  });
});