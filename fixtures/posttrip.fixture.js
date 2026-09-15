const { test: base, expect } = require("@playwright/test");
const { PostTrip } = require("../pages/posttrip.page").default;

const test = base.extend({
  posttrippage: async ({ page }, use) => {
    const posttrippage = new PostTrip(page);
    await posttrippage.goto();

    await use(posttrippage);
  },
});

module.exports = { test, expect };
