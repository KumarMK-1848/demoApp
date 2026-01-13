class HomePage {
  constructor(page) {
    this.entranceExamLink = page.locator(
      `//a[@href="Product.php?value=entrance%20exam" and text()=" Entrance Exam "]`
    );
    this.literatureLink = page.locator(
      `//a[@href="Product.php?value=Literature%20and%20Fiction" and text()=" Literature & Fiction "]`
    );
    this.academicLink = page.locator(
      `//a[@href="Product.php?value=Biographies%20and%20Auto%20Biographies" and text()=" Biographies & Auto Biographies "]`
    );
    this.logInButton = page.locator(`//button[@id="login_button"]`);
  }
}

export default HomePage;
