class LogInPopUp {
  constructor(page) {
    this.usernameInputField = page.locator(`//input[@name="login_username"]`);
    this.passwordInputField = page.locator(`//input[@name="login_password"]`);
    this.logInButton = page.locator(
      `//button[@name="submit" and @value="login"]`
    );
  }
}

export default LogInPopUp;
