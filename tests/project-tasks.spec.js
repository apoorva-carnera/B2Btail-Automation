import { expect, test } from "@playwright/test";
import projectTasksPage from "../pages/project-tasks";
//import contentPlannerPage from "../pages/content-planner";

test.describe(
  "B2B Automation test cases",
  { tag: ["@Regression"] },
  async () => {
    test.beforeEach("Navigate to Project Tasks page", async ({ page }) => {
      const projTasksPage = new projectTasksPage(page);
      await projTasksPage.goTo();
      await projTasksPage.login();
    });
    test("Test Case1: Project Tasks", async ({ page }) => {
      const projTasksPage = new projectTasksPage(page);
      await projTasksPage.verifyUIElements();
      await projTasksPage.addToDoItem();
    });
  },
);
