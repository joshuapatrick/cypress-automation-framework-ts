# Cypress Automation Framework (Coding Exam)

This repository contains an end-to-end test suite built using **Cypress with TypeScript**.
It demonstrates handling of complex UI scenarios such as **dynamic DOM elements**, **network-driven state changes**, and **Shadow DOM / iframe interactions** using a clean and scalable framework.

---

## Objective

To design and implement a maintainable automation framework that solves the following challenges:

* Flaky and dynamic DOM handling
* State synchronization using network interception
* Shadow DOM and nested frame interaction
* Reusable and scalable structure using Page Object Model (POM)

---

## Tech Stack

* Cypress (v15.14.0)
* TypeScript
* Node.js (v16.20.2)
* Page Object Model (POM)

---

## Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd <your-project-folder>
```

2. Install dependencies:

```bash
npm install
```

---

## Running the Tests

### Open Cypress (UI Mode)

```bash
npx cypress open
```

### Run in Headless Mode

```bash
npx cypress run
```

---

## Project Structure

```
cypress/
│
├── e2e/
│   ├── task1.cy.ts
│   ├── task2.cy.ts
│   └── task3.cy.ts
│
├── fixtures/
│   └── testData.json
│
├── pages/
│   ├── advancedElementsPage.ts
│   ├── dynamicControlsPage.ts
│   └── tablePage.ts
│
├── support/
│   ├── commands.ts
│   └── e2e.ts
│
cypress.config.ts
tsconfig.json
package.json
README.md
.gitignore
```

---

## Test Scenarios

### Task 1: Flaky DOM & Logic Challenge

* Locate a table row using a unique **Iuvaret value**
* Perform actions without relying on dynamic IDs or indexes
* Click the corresponding **Edit** button
* Capture selected color (Red/Blue/Green)
* Validate that the **canvas "Answer" value updates correctly**

---

### Task 2: State Management & Advanced Interception

* Remove checkbox and verify it disappears
* Use `cy.intercept()` to:

  * Capture the XHR request
  * Assert response status is **200**

* Validate `"It's gone!"` message
* Enable input field safely using a guard condition
* Type: `Cypress Challenge`

#### Implementation Note

While `cy.intercept()` is implemented as required, Cypress already provides **automatic retry and waiting mechanisms**.
In many cases, explicit network interception is **not strictly necessary**, as assertions on DOM state (e.g., element removal or enabled state) are sufficient and more aligned with real user behavior.

This approach demonstrates understanding of:

* When to use `intercept` for validation
* When to rely on Cypress’s built-in retry-ability for cleaner tests

---

### Task 3: Shadow DOM & Multi-Frame Challenge

* Access Shadow DOM and assert expected text
* Navigate nested frames and validate **MIDDLE frame content**
* Implement reusable logic using Page Object Model (POM)

---

## Design Approach

### Page Object Model (POM)

* Encapsulates selectors and actions into reusable classes
* Keeps test specs clean and readable
* Promotes maintainability and scalability

### Cypress Best Practices

* No hard waits (`cy.wait(time)`)
* Network synchronization using `cy.intercept()` where applicable
* Leveraging Cypress automatic waiting for stability
* Dynamic element handling without fragile selectors
* Assertions used as guards for reliability

---

## ⚙️ Requirements

* Node.js (v14 or higher recommended)
* npm

---

## Notes

* Framework is designed to handle **real-world flaky UI behavior**
* Emphasis on **stability, readability, and maintainability**
* Each task is isolated into its own spec file as required

---

## Author

Joshua Patrick A. Balucanag
