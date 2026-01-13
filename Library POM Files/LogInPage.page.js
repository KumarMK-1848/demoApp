class LogInPage {
  constructor(page) {
    this.usernameInputField = page.locator(`#username`);
    this.passwordInputField = page.locator(`#password`);
    this.buttonSubmit = page.locator(`#login`);
  }
}
export default LogInPage;
