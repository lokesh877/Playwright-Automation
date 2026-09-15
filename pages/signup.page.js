class SignUp {
  constructor(page) {
    this.page = page;
    this.fullName = page.getByPlaceholder("Full Name");
    this.email = page.getByPlaceholder("Email Address");
    this.password = page.getByRole("textbox", { name: "password" });
    this.securityQuestion1 = page.locator('select[name="securityQuestion1"]');
    this.securityAnswer1 = page.locator('input[name="securityAnswer1"]');
    this.securityQuestion2 = page.locator('select[name="securityQuestion2"]');
    this.securityAnswer2 = page.locator('input[name="securityAnswer2"]');
    this.termsCheckbox = page.locator("#agree-terms-signup");
    this.createAccountButton = page.getByRole("button", {
      name: "Create Account",
    });
  }

  async goto() {
    await this.page.goto("https://thenomadnova.com/signup");
  }

  async signup(
    fullName,
    email,
    password,
    securityQuestion1,
    securityAnswer1,
    securityQuestion2,
    securityAnswer2,
  ) {
    await this.fullName.fill(fullName);
    await this.email.fill(email);
    await this.password.fill(password);
    const sq1 = this.page.locator('select[name="securityQuestion1"]');
    await sq1.selectOption({ label: "What is your favorite place?" });
    await this.securityAnswer1.fill(securityAnswer1);
    const sq2 = this.page.locator('select[name="securityQuestion2"]');
    await sq2.selectOption({ label: "What is your favorite food?" });
    await this.securityAnswer2.fill(securityAnswer2);
    await this.termsCheckbox.check();
    await this.createAccountButton.click();
  }
}

module.exports = { SignUp };
