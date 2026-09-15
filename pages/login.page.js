class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.getByRole("textbox", { name: "email" });
    this.password = page.getByRole("textbox", { name: "password" });
    this.terms = page.locator("#agree-terms");
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async goto() {
    await this.page.goto("https://thenomadnova.com/login");
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.terms.check();
    await this.loginButton.click();
    await this.page.waitForURL("https://thenomadnova.com/dashboard");
  }
}

module.exports = { LoginPage };
