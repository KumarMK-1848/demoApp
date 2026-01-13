import { expect, test } from "@playwright/test";
import HomePageSchool from "../School Proj POM Files/HomePageSchool.page";
import fs from "fs";
import LogInPage from "../School Proj POM Files/LogInPage.page";
import CourseForm from "../School Proj POM Files/CourseForm.page";
let jsonData = fs.readFileSync(
  `C:/Users/User/Desktop/demo/TestData/SchoolJSONData.json`
);
let { logInData, courseListData } = JSON.parse(jsonData);

test.only("courseList", async ({ page }) => {
  let home = new HomePageSchool(page);
  let logIn = new LogInPage(page);
  let courseFormData = new CourseForm(page);
  await page.goto(logInData.url);
  await logIn.userInput.fill(logInData.username);
  await logIn.passwordInput.fill(logInData.password);
  expect(await logIn.userInput.inputValue()).toBe(logInData.username);
  expect(await logIn.passwordInput.inputValue()).toBe(logInData.password);
  await logIn.submitButton.click();
  await home.courseListLink.click();

  await page.locator(`//tbody/child::tr[@role="row"]`).first().waitFor();
  let totalTr = await page.locator(`//tbody/child::tr[@role="row"]`).all();

  //! adding the course :

  //   await courseFormData.courseTitle.fill(courseListData.course);
  //   await courseFormData.courseDescription.fill(courseListData.description);
  //   expect(await courseFormData.courseTitle.inputValue()).toBe(
  //     courseListData.course
  //   );
  //   expect(await courseFormData.courseDescription.inputValue()).toBe(
  //     courseListData.description
  //   );
  //   await courseFormData.saveButton.click();
  //   await page.reload();

  //   await page.locator(`//tbody/child::tr[@role="row"]`).first().waitFor();
  //   let totalTr2 = await page.locator(`//tbody/child::tr[@role="row"]`).all();
  //   expect(totalTr2.length).toBeGreaterThan(totalTr.length);

  // await page.waitForTimeout(3000);

  //! for cancel the course button :

  //   await courseFormData.cancelButton.click();
  //   expect(await courseFormData.courseTitle).toBeEmpty();
  //   expect(await courseFormData.courseDescription).toBeEmpty();
  //   await page.waitForTimeout(3000);

  //! delete the course :

  //   await page.locator(`//button[@data-id="4" and text()="Delete"]`).click();
  //   await page.locator(`//button[@id="confirm" and text()="Continue"]`).click();
  //   await page.reload();
  //   await page.locator(`//tbody/child::tr[@role="row"]`).first().waitFor();
  //   let totalTr3 = await page.locator(`//tbody/child::tr[@role="row"]`).all();
  //   expect(totalTr3.length).toBeLessThan(totalTr.length);

  //! edit the course :

  await page.locator(`//button[@data-id="15" and text()="Edit"]`).click();
  let courseD1 = await page
    .locator(
      `//button[@data-id="15" and text()="Edit"]/ancestor::tr/descendant::p[text()="Course: "]/child::b`
    )
    .innerText();
  let descriptionD1 = await page
    .locator(
      `//button[@data-id="15" and text()="Edit"]/ancestor::tr/descendant::p[text()="Description: "]/child::small`
    )
    .innerText();
  console.log(courseD1, descriptionD1);

  expect(await courseFormData.courseTitle.inputValue()).toContain(courseD1);
  expect(await courseFormData.courseDescription.inputValue()).toContain(
    descriptionD1
  );
});
