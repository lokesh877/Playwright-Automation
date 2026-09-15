const { test: base, expect } = require("@playwright/test");
import { LoginPage } from "../pages/login.page";

const test = base.extend({
  loginpage: async ({ page }, use) => {
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    
    await use(loginpage);
  }
});
module.exports = { test, expect };
