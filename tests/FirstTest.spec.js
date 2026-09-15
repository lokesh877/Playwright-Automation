const {
  test: loginTest,
  expect: loginExpect,
} = require("../fixtures/login.fixture");
const {
  test: signupTest,
  expect: signupExpect,
} = require("../fixtures/signup.fixture");

const {
  test: posttripTest,
  expect: posttripExpect,
} = require("../fixtures/posttrip.fixture");

const authentication = require("@playwright/test");
//const logindata = require("../testdata/testdata.json");

authentication.describe("SignUp and Login", () => {
  authentication.describe.configure({ mode: "serial" });

  const name = "Lokesh117";
  const email = "Lokesh118@gmail.com";
  const password = "Lokesh118@123";
  console.log(`Generated email: ${email}`);
  console.log(`Generated password: ${password}`);

  signupTest("01 - SignUp", async ({ signuppage }) => {
    //await signuppage.goto("https://thenomadnova.com");
    // await signuppage.getByText("Sign Up").click();

    await signuppage.signup(
      name,
      email,
      password,
      "What is your favorite place?",
      "Chennai",
      "What is your favorite food?",
      "chick",
    );
    await loginExpect(signuppage.page).toHaveURL(
      "https://thenomadnova.com/login",
    );
  });

  loginTest("02 - Login", async ({ loginpage }) => {
    await loginpage.login(email, password);
    await loginExpect(loginpage.page).toHaveURL(
      "https://thenomadnova.com/dashboard",
    );
  });
});

posttripTest("post a trip", async ({ posttrippage }) => {
  await posttrippage.postTrip(
    "Chennai",
    "Bangalore",
    "2026-09-15",
    "2026-09-20",
    "Car",
    "INR",
    "1000",
    "2",
    "3",
    "Yes",
    "Adventure",
    "Will discuss further",
    "This is a test trip.",
    "G:\\Images\\104D3500\\DSC_0126.jpg",
  );
});

// test.beforeEach(async ({ page }) => {
//   await page.goto("https://thenomadnova.com/");
// });

// test.beforeEach(async ({ page }, testInfo) => {
//   if (testInfo.title === "Sign Up") {
//     await page.getByText("Sign Up").click();
//   }
// });

//   await page.getByRole("button", { name: "Forge your Journey" }).click();
//   await page
//     .getByRole("textbox", { name: "email" })
//     .fill("lokeshp1@example.com");
//   await page.getByRole("textbox", { name: "password" }).fill("Lokesh1@123");
//   await page.locator("#agree-terms").check();
//   await page.getByRole("button", { name: "Login" }).click();
// });

// await page.getByPlaceholder("Full Name").fill("Lokesh1");
// await page.getByPlaceholder("Email Address").fill("lokeshp1@example.com");
// await page.getByRole("textbox", { name: "password" }).fill("Lokesh1@123");
// const sq1 = page.locator('select[name="securityQuestion1"]');
// await sq1.selectOption({ label: "What is your favorite place?" });
// await page.locator('input[name="securityAnswer1"]').fill("Chennai");
// const sq2 = page.locator('select[name="securityQuestion2"]');
// await sq2.selectOption({ label: "What is your favorite food?" });
// await page.locator('input[name="securityAnswer2"]').fill("chick");
// await page.locator("#agree-terms-signup").check();
// await page.getByRole("button", { name: "Create Account" }).click();
