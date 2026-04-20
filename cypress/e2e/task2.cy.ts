import { DynamicControlsPage } from '../pages/dynamicControlsPage';

describe('Task 2 - State Management & Async Handling', () => {
  const page = new DynamicControlsPage();

  it('should handle dynamic controls without static waits', () => {
    cy.fixture('testData').then((data) => {
      const task2 = data.task2;
      page.visit();

      // Checkbox flow
      page.clickRemove();
      page.verifyCheckboxGone();

      // Input flow (from fixture)
      page.clickEnable();
      page.typeInput(task2.inputText);
      page.verifyInputValue(task2.inputText);
    });
  });
});