class CourseForm {
  constructor(page) {
    this.courseTitle = page.locator(`//input[@name="course"]`);
    this.courseDescription = page.locator(`//textarea[@name="description"]`);
    this.saveButton = page.getByRole("button", { name: " Save" });
    this.cancelButton = page.getByRole("button", { name: " Cancel" });
  }
}

export default CourseForm;
