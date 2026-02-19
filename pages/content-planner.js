import { expect } from "playwright/test";

export default class contentPlannerPage {
  constructor(page) {
    this.page = page;

    this.Left_Nav_Option = page.locator("//span[text()='Content Planner']");
    this.Page_Title = page.locator("//h1[text()='Content Planner']");
    this.Month = page.getByRole("button", { name: "Month" });
    this.Week = page.getByRole("button", { name: "Week" });
    this.Day = page.getByRole("button", { name: "Day" });
    this.List = page.getByRole("button", { name: "List" });
    this.Current_Month = page.locator(".font-semibold.text-foreground");
    this.Current_Day = page.locator(".calendar-cell-today");
    this.Content_Planner = page.locator(".bg-brand-accent.text-sidebar-text");
    this.Post_Title = page.locator("#title");
    this.Post_Content = page.locator("#content");
    this.Platforms = page.getByRole("checkbox");
  }

  async verifyUIElements() {
    await this.Left_Nav_Option.click();
    await expect(this.Page_Title).toBeVisible();
    await expect(this.Left_Nav_Option).toHaveText("Content Planner");
    await expect(this.Month).toBeVisible();
    //await expect(this.Week).toBeVisible();
    //await expect(this.Day).toBeVisible();
    //await expect(this.List).toBeVisible();
  }

  async createNewPostForCurrentDay() {
    let current_month = await this.Current_Month.textContent();
    console.log("Current month is: " + current_month);
    let current_day = await this.Current_Day.textContent();
    console.log("Today's date is: " + current_day);
    await this.Current_Day.click();
    await this.addNewPost();
  }

  async addNewPost() {
    await this.Post_Title.fill("Test");
    await this.Post_Content.fill("Test");
    let platform_count = await this.Platforms.count();
    console.log("Platform count is: " + platform_count);

    for (let i = 0; i < platform_count; i++) {
      await this.Platforms.nth(i).click();
      let platform_name = await this.page
        .locator("//div[@class='grid grid-cols-2 gap-3']/div/label")
        .nth(i)
        .textContent();
      console.log("Platform selected is: " + platform_name);
    }
  }
}
