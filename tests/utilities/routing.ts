import { expect, type Page, type TestInfo } from "@playwright/test";
import type { Route } from "../constants/routing";

export async function testRouting(page: Page, testInfo: TestInfo, routes: Route[]) {
    // Navigate to Root
    await page.goto("/");

    // Add extra delay depending on the environment
    let envExtraDelay: number = 3000;
    if (process.env.NODE_ENV === "prod") {
        envExtraDelay = 7000;
    }

    // Iterate through all available routes
    for (const route of routes) {

        // Click the link and wait
        await page.getByTestId(route.testId).click();
        await page.waitForLoadState("networkidle", { timeout: 10000, });

        // Add extra delay for heavy routes
        if (route.testId === "FHT") {
            await page.waitForTimeout(envExtraDelay);
        }

        // Check if navigation succeeded
        await expect(page).toHaveURL(route.url, { timeout: 10000, });

        // Log the full tested URL
        console.log(`${testInfo.project.use.baseURL}${route.url}`);
    }
}