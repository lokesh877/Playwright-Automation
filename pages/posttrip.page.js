
class PostTrip {
  constructor(page) {
    this.page = page;
    this.posttrip = page.getByRole("button", { name: "Post a Trip" });
    this.destination = page.getByPlaceholder("e.g. Bali, Indonesia");
    this.departure = page.getByPlaceholder("e.g. New York, USA");
    this.fromdate = page.locator('input[name="fromDate"]');
    this.todate = page.locator('input[name="toDate"]');
    this.transport = page.locator('select[name="transport"]');
    this.currency = page.locator('select[name="currency"]');
    this.budget = page.getByPlaceholder("Enter amount");
    this.currpeople = page.getByRole("spinbutton", {
      name: "e.g. 3 (You + 2 friends)",
    });
    this.lookingfor = page.getByRole("spinbutton", {
      name: "e.g. 2 (Spots for app users)",
    });
    this.comfartablewith = page.getByText("Men Only", { exact: true });
    this.tripcat = page.locator('select[name="category"]');
    this.accomodation = page.locator('select[name="accommodation"]');
    this.description = page.getByPlaceholder("Describe your trip...");
    this.imageupload = page.locator('input[type="file"]');
    this.posttripbutton = page.locator("form").getByRole("button", { name: "Post Trip", exact: true });
    this.safetyWarning = page
     .locator("div.bg-white.rounded-2xl")
     .filter({
      hasText: "Safety Warning"
     });

    this.cancelWarning = this.safetyWarning.getByRole("button", {
      name: "Cancel",
      exact: true
    });

    this.finalConsent = this.safetyWarning.getByRole("button", {
      name: "I Understand, Post Trip",
      exact: true
    });

  }
  async goto() {
    await this.page.goto("https://thenomadnova.com/dashboard");
    await this.posttrip.click();
  }

  async postTrip(destination, departure,fromdate,todate,transport,currency,budget,currpeople,
    lookingfor,comfortablewith,category,accomodation,description,image) {
    await this.destination.fill(destination);
    await this.departure.fill(departure);
    await this.fromdate.fill(fromdate);
    await this.todate.fill(todate);
    await this.transport.selectOption(transport);
    await this.currency.selectOption(currency);
    await this.budget.fill(budget);
    await this.currpeople.fill(currpeople);
    await this.lookingfor.fill(lookingfor);
    await this.comfartablewith.click();
    await this.tripcat.selectOption(category);
    await this.accomodation.selectOption(accomodation);
    await this.description.fill(description);
    await this.imageupload.setInputFiles(image);
    await this.posttripbutton.click();
    await this.safetyWarning.waitFor({
      state: "visible"
    });
    //await this.cancelWarning.click();
    await this.finalConsent.click();
    
  }
}

export default { PostTrip };
