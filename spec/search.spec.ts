import { NightwatchBrowser } from "nightwatch";

module.exports = {
  before: (browser: NightwatchBrowser) => {
    browser.url("https://e2e-boilerplate.github.io/sandbox/");
  },

  after: (browser: NightwatchBrowser) => {
    browser.end();
  },

  "should be on Sandbox": function(browser: NightwatchBrowser) {
    browser.assert.title("Sandbox");
    browser.assert.containsText("h1", "Sandbox");
  }
};
