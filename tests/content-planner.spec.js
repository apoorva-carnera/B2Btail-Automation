import { expect, test } from "@playwright/test";
import basePage from "../pages/base-page";
import contentPlannerPage from "../pages/content-planner";

test.describe("B2B Automation test cases", { tag: ["@sanity"] }, async () => {
  test("Test case1: Verify UI elements on Content Planner page", async ({
    page,
  }) => {
    const basepage = new basePage(page);
    const cont_planner_page = new contentPlannerPage(page);
    await basepage.goTo();
    await basepage.login();
    await cont_planner_page.verifyUIElements();
  });
});
