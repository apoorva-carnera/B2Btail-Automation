import { expect, test } from "@playwright/test";
import contentPlannerPage from "../pages/content-planner";

test.describe(
  "B2B Automation test cases",
  { tag: ["@Regression"] },
  async () => {
    test("Test case1: Create Post", async ({ page }) => {
      const contPlannerPage = new contentPlannerPage(page);
      await contPlannerPage.goTo();
      await contPlannerPage.login();
      await contPlannerPage.verifyUIElements();
      await contPlannerPage.createNewPostForCurrentDay();
    });
  },
);
