import { expect } from "playwright/test";
import { faker } from "@faker-js/faker";
import basePage from "./base-page";

export default class contentPlannerPage extends basePage {
  constructor(page) {
    super(page);
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
    this.Time = page.locator("#time");
    this.Add_Post = page.getByRole("button", { name: "Add Post" });
    this.Success_Message = page.locator("div[data-title]").last();
    this.Digital_Game_Plan = page.locator("//span[text()='Digital Game Plan']");
    this.Welcome_Message = page.locator("ol li");
    this.Post = page.locator("div h4").last();
    this.Edit_Post = page.locator("#radix-_r_74_");
    this.Full_Editor = page.getByRole("button", { name: "Open Full Editor" });
    // //h2[@id="radix-_r_74_"]
    // //button[text()='Open Full Editor']
    // //h4[text()='randomName']
  }

  async verifyUIElements() {
    await this.Welcome_Message.waitFor({ state: "detached" });
    await this.Digital_Game_Plan.click();
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
    const randomName = faker.lorem.sentence(5);
    const randomContent = faker.lorem.paragraphs(1);
    await this.Post_Title.fill(randomName);
    await this.Post_Content.fill(randomContent);
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

    await this.Time.click();
    await this.Time.fill("11:00");
    await this.Add_Post.click();
    // let message = await this.Success_Message.textContent();
    // expect(this.Success_Message).toHaveText(
    //   "Content plan created successfully",
    // );
    // console.log(message);
    await expect(this.Current_Month).toBeVisible();
    await expect(this.Current_Day).toBeVisible();
    await this.Post.waitFor({ state: "visible" });
    await expect(this.Post).toBeVisible();
    await this.page.locator(`//h4[text()='${randomName}']`).click();
    //await expect(this.Edit_Post).toBeVisible();
    await expect(this.Full_Editor).toBeVisible();
  }
}
