class LogInPage {
  constructor(page) {
    this.userInput = page.locator(`//input[@id="username"]`);
    this.passwordInput = page.locator(`//input[@id="password"]`);
    this.submitButton = page.getByRole("button", { name: "Login" });
  }
}

export default LogInPage;
