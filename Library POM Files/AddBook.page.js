class AddBook {
  constructor(page) {
    this.popUpContainer = page.locator(`//div[@class="col-lg-9 well"]`);
    this.bookTitleInput = page.locator(`//input[@name="book_title"]`);
    this.bookDescriptionInput = page.locator(`//input[@name="book_desc"]`);
    this.bookCategoryInput = page.locator(`//input[@name="book_category"]`);
    this.bookAuthorInput = page.locator(`//input[@name="book_author"]`);
    this.bookDatePublished = page.locator(`//input[@name="date_publish"]`);
    this.bookQuantity = page.locator(`//input[@type="number" and @name="qty"]`);
    this.submitButton = page.locator(`//button[@name="save_book"]`);
  }
}

export default AddBook;
