import { test, expect } from "@playwright/test"
import { testRouting } from "./utilities/routing";
import { routing } from "./constants/routing";
import { shouldRunTest } from "./utilities/common";

test.describe.serial("Routing", () => {

    test.describe("Desktop", () => {

        test("PROD", async ({ page }, testInfo) => {
            await testRouting(page, testInfo, routing.desktop.prod);
        });

        test("DEV", async ({ page }, testInfo) => {
            shouldRunTest();
            await testRouting(page, testInfo, routing.desktop.dev);
        });
    });


    test.describe("Mobile", () => {

        // test("PROD", async ({ page }) => {
        //     console.log("prod");
        // });

        // test("DEV", async ({ page }) => {
        //     shouldRunTest();
        //     console.log("dev");
        // });
    });

});
