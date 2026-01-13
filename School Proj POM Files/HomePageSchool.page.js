class HomePageSchool {
  constructor(page) {
    this.courseListLink = page.locator(`.nav-courses`);
    this.facultyListLink = page.locator(`.nav-faculty`);
    this.subjectListLink = page.locator(`.nav-subjects`);
    this.scheduleListLink = page.locator(`.nav-schedule`);
    this.userListLink = page.locator(`.nav-users`);
  }
}

export default HomePageSchool;
