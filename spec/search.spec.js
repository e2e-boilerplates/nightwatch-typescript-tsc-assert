module.exports = {
  before: browser => {
    browser.url("https://e2e-boilerplates.github.io/sandbox/");
  },

  after: browser => {
    browser.end();
  },

  "should be on Sandbox": function(browser) {
    browser.assert.title("Sandbox");
    browser.getText("css selector", "h1", function(text) {
      browser.assert.strictEqual(text.value, "Sandbox");
    });
  }
};
