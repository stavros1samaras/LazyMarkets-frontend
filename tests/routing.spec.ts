import { test, expect } from "@playwright/test"
import { testRouting } from "./utilities/routing";
import { routing } from "./constants/routing";

test.describe.serial("Routing", () => {


    test("Desktop", async ({ page }, testInfo) => {
        if (testInfo.project.name !== 'chromium') {
            test.skip();
        }
        console.log(testInfo.project.use.baseURL)
        await testRouting(page, testInfo, routing.desktop);
    });

    test("Mobile", async ({ page }, testInfo) => {
        console.log(testInfo.project.use.baseURL)
        await testRouting(page, testInfo, routing.mobile);
    });


});
