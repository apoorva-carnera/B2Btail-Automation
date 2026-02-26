import { expect } from "playwright/test";

export default class contentPlannerPage {
  constructor(page) {
    this.page = page;

    this.left_nav_option = page.locator("//span[text()='Content Planner']");
    this.page_title = page.locator("//h1[text()='Content Planner']");
  }

  async verifyUIElements() {
    await this.left_nav_option.click();
    await expect(this.left_nav_option).toBeVisible();
    await expect(this.page_title).toBeVisible();
  }
}
