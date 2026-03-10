import { expect, test } from "@playwright/test";
import contentPlannerPage from "../pages/content-planner";

test.describe(
  "B2B Automation test cases",
  { tag: ["@Regression"] },
  async () => {
    test.beforeEach("Navigate to Content Planner page", async ({ page }) => {
      const contPlannerPage = new contentPlannerPage(page);
      await contPlannerPage.goTo();
      await contPlannerPage.login();
    });
    test("Test Case1: Create Post", async ({ page }) => {
      const contPlannerPage = new contentPlannerPage(page);
      // await contPlannerPage.goTo();
      // await contPlannerPage.login();
      await contPlannerPage.verifyUIElements();
      await contPlannerPage.createNewPostForCurrentDay();
      await contPlannerPage.editPost();
      await contPlannerPage.deletePost();
    });

    test.skip("Test Case2: Edit Post", async ({ page }) => {
      const contPlannerPage = new contentPlannerPage(page);
      await contPlannerPage.editPost();
    });
  },
);
