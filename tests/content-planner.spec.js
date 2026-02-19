import { expect, test } from "@playwright/test";
import basePage from "../pages/base-page";
import contentPlannerPage from "../pages/content-planner";

test.describe(
  "B2B Automation test cases",
  { tag: ["@Regression"] },
  async () => {
    test.beforeEach(async ({ page }) => {
      const basepage = new basePage(page);
      await basepage.goTo();
      await basepage.login();
    });

    test("Test case1: Create Post", async ({ page }) => {
      const cont_planner_page = new contentPlannerPage(page);
      await cont_planner_page.verifyUIElements();
      await cont_planner_page.createNewPostForCurrentDay();
    });
  },
);
