const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1000,
    viewportHeight: 660, /*1440,900 */
    "baseUrl": "https://buger-eats-qa.vercel.app"
  },
});
