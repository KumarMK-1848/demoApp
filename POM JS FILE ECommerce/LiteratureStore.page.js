class LiteraturePage {
  constructor(page) {
    this.image1Link = page.locator(`//img[@src="img/books/LIT-2.jpg"]`);
    this.image2Link = page.locator(`//img[@src="img/books/LIT-8.jpg"]`);
  }
  async selectToCart(imageLink, locator, button, page) {
    await imageLink.click();
    await locator.click();
    await button.click();
  }
}

export default LiteraturePage;
