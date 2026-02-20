import { expect } from "@playwright/test";
import { getEnvironmentVar } from "../utils/env.stage";

const application_url = getEnvironmentVar("LANDING_PAGE_URL");
const user_email = getEnvironmentVar("USER_NAME");
const password = getEnvironmentVar("PASSWORD");

export default class basePage {
  constructor(page) {
    this.page = page;

    this.Email = page.locator("#email");
    this.Password = page.locator("#password");
    this.Login_Btn = page.locator("//button[text()='Login']");
    //this.success_message = page.getByText("Welcome back!");
    this.Success_Message = page.locator("ol li");
  }

  async goTo(url = application_url) {
    await this.page.goto(url);
  }

  async login() {
    await this.Email.fill(user_email);
    await this.Password.fill(password);
    await expect(this.Login_Btn).toBeEnabled();
    await this.Login_Btn.click();
  }
}
