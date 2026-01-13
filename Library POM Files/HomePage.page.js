class HomePage {
  constructor(page) {
    this.booksLink = page.locator(`//a[@href="book.php"]`);
    this.addBook = page.locator(`//button[@id="add_book"]`);
    this.accountsLink = page.locator(
      `//a[@style="font-size:18px; border-bottom:1px solid #d3d3d3;" and @href=""]/child::i[@class="glyphicon glyphicon-tasks"]/parent::a`
    );
    this.studentLink = page.locator(`//a[@href="student.php"]`);
    this.addStudent = page.locator(
      `//button[@id="add_student" and text()=" Add new"]`
    );
  }
}

export default HomePage;
