const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1280,
    viewportWidth: 1200,
    baseUrl: 'http://localhost:8765',
    experimentalRunAllSpecs: true,
  },
});
