import { expect } from "playwright/test";
import { faker } from "@faker-js/faker";
import basePage from "./base-page";

export default class projectTasksPage extends basePage {
  constructor(page) {
    super(page);
    this.page = page;

    this.Project_Management = page.locator(
      "//span[text()='Project Management']",
    );
    this.Project_Tasks = page.locator("//span[text()='Project Tasks']");
    this.Header_Text = page.locator("header div h1");
    this.SubHeader_Text = page.locator("header p");
    this.Kanban_Option = page.getByRole("button", { name: "Kanban" });
    this.List_Option = page.getByRole("button", { name: "List" });
    this.Cards = page.locator("div h2");
    this.Status = page.locator("#radix-_r_hi_");
    this.Priority = page.locator("#radix-_r_hk_");
    this.Assignee = page.locator("#radix-_r_hm_");
    this.Tags = page.locator("#radix-_r_ho_");
    this.Due_Date = page.locator("#radix-_r_hq_");
    this.Add_Item_ToDo = page.getByTitle("Add item to To do");
    this.Add_New_Task_Title = page.getByText("Add New Task");
    this.Add_Title = page.getByPlaceholder("Enter task title");
    this.Description = page.locator("[data-placeholder='Write here']");
    this.Add_Task_Btn = page.locator('button[type="submit"]');
    this.Task_Added = page.locator("div[role='button']");
  }

  async verifyUIElements() {
    await this.Project_Management.click();
    await this.Project_Tasks.click();
    await expect(this.Project_Tasks).toHaveText("Project Tasks");
    await expect(this.SubHeader_Text).toHaveText(
      "Track and manage your project tasks efficiently",
    );
    await expect(this.Kanban_Option).toBeVisible();
    await this.getCardsText();
  }

  async getCardsText() {
    let text = await this.Cards.allTextContents();
    console.log("Kanban status options are: " + text.join(", "));
  }

  async addToDoItem() {
    await this.Add_Item_ToDo.click();
    await expect(this.Add_New_Task_Title).toBeVisible();
    await this.addTitle();
    await this.addDescription();
    await this.Add_Task_Btn.click();
    await expect(this.Task_Added).toBeVisible();
  }

  async addTitle() {
    const randomTitle = faker.lorem.sentence(2);
    await this.Add_Title.click();
    await this.Add_Title.fill(randomTitle);
  }

  async addDescription() {
    const randomContent = faker.lorem.sentence(1);
    await this.Description.fill(randomContent);
  }
}
