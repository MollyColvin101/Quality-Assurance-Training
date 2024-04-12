const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "electron") {
          launchOptions.preferences.defaultCommandTimeout = 10000; // Adjust this value as needed
          launchOptions.preferences.pageLoadTimeout = 70000; // Adjust this value as needed
          return launchOptions;
        }
      });
    },
  },
});