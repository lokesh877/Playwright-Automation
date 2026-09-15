const { test:base , expect } = require("@playwright/test");
const { SignUp } = require("../pages/signup.page");

const test = base.extend({
  signuppage: async ({ page }, use) => {
    const signuppage = new SignUp(page);
    await signuppage.goto();
      
    await use(signuppage);
  }
});

module.exports = { test, expect };