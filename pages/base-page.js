import { expect } from "@playwright/test";
import { getEnvironmentVar } from "../utils/env.stage";

const application_url = getEnvironmentVar("LANDING_PAGE_URL");
const user_email = getEnvironmentVar("USER_NAME");
const password = getEnvironmentVar("PASSWORD");

export default class basePage {
  constructor(page) {
    this.page = page;

    this.email = page.locator("#email");
    this.password = page.locator("#password");
    this.login_btn = page.locator("//button[text()='Login']");
    this.success_message = page.getByText("Welcome back!");
  }

  async goTo(url = application_url) {
    await this.page.goto(url);
  }

  async login() {
    await this.email.fill(user_email);
    await this.password.fill(password);
    await expect(this.login_btn).toBeEnabled();
    await this.login_btn.click();
  }
}
