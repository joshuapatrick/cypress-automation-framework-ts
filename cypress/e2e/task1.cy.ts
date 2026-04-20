import { TablePage } from '../pages/tablePage';

describe('Task 1 - Flaky DOM & Logic Challenge', () => {

  const page = new TablePage();

  it('should find row, click edit, and verify canvas updates after button click', () => {
    cy.fixture('testData').then((data) => {
      const task1 = data.task1;
      page.visit();
      page.clickEditByIuvaret(task1.rowValue);

      page.getCanvasSnapshot().then((before) => {
        page.logCanvasSnapshot('Before', before);
        page.clickColorButton(task1.buttonIndex);
        page.verifyCanvasChanged(before);
      });
    });
  });
});