import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    supportFile: 'cypress/support/e2e.ts'
  }
});