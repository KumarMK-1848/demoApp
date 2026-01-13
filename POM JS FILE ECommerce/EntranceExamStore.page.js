class EntranceExamStore {
  constructor(page) {
    this.sortByDropDown = page.locator(`//select[@id="select"]`);
    this.image1Link = page.locator(`//img[@src="img/books/ENT-2.jpg"]`);
    this.image2Link = page.locator(`//img[@src="img/books/ENT-12.jpg"]`);
  }
  async selectToCart(imageLink, locator, button, page) {
    await imageLink.click();
    await locator.click();
    await button.click();
  }
}
export default EntranceExamStore;
