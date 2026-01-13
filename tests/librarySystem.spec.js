import { test } from "@playwright/test";
import LogInPage from "../Library POM Files/LogInPage.page.js";
import HomePage from "../Library POM Files/HomePage.page.js";
import AddBook from "../Library POM Files/AddBook.page.js";

// test.only("library", async ({ page }) => {
//   let logIn = new LogInPage(page);
//   let home = new HomePage(page);
//   let addBookData = new AddBook(page);
//   await page.goto(
//     `http://49.249.28.218:8081/TestServer/Build/Advance_Library_System/home.php`
//   );
//   await logIn.usernameInputField.fill("admin");
//   await logIn.passwordInputField.fill("admin");
//   await logIn.buttonSubmit.click();

//   await home.booksLink.click({ state: "visible" });
//   await home.addBook.click();

//   //   await addBookData.popUpContainer.waitFor({ state: "visible" });
//   //   await page.waitForTimeout(4000);
//   await addBookData.bookTitleInput.fill("Spartans");
//   await addBookData.bookAuthorInput.fill("Kumar");
//   await addBookData.bookCategoryInput.fill("Thriller");
//   await addBookData.bookDescriptionInput.fill(
//     "hello world  welcome all....................."
//   );
//   await addBookData.bookQuantity.fill("2");
//   await addBookData.bookDatePublished.fill("2000-03-04");
//   await addBookData.submitButton.click();
// });

test.only("account", async ({ page }) => {
  let logIn = new LogInPage(page);
  let home = new HomePage(page);
  let addBookData = new AddBook(page);
  await page.goto(
    `http://49.249.28.218:8081/TestServer/Build/Advance_Library_System/home.php`
  );
  await logIn.usernameInputField.fill("admin");
  await logIn.passwordInputField.fill("admin");
  await logIn.buttonSubmit.click();
  await home.accountsLink.click();
  await home.studentLink.click();
  await home.addStudent.click();
  await page.waitForTimeout(4000);
});
