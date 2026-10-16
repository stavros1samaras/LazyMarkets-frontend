import { test, expect } from "@playwright/test"

import { LANGUAGE_OPTIONS } from "@/_features/_translation/config"

const SUPPORTED_LANGUAGES = LANGUAGE_OPTIONS.map(({ code }) => code)
const SUPPORTED_LANGUAGE_PATTERN = new RegExp(`^(${SUPPORTED_LANGUAGES.join("|")})$`)

test.describe("home page html lang", () => {
	test("html element has a valid lang attribute", async ({ page }) => {
		await page.goto("/")

		const lang = await page.locator("html").getAttribute("lang")

		expect(lang, "<html> should have a lang attribute").not.toBeNull()
		expect(lang?.trim(), "<html> lang should not be empty").not.toBe("")
		expect(lang, "<html> lang should be a supported language").toMatch(SUPPORTED_LANGUAGE_PATTERN)
	})

	test("html lang defaults to en without a locale cookie", async ({ page }) => {
		await page.goto("/")

		await expect(page.locator("html")).toHaveAttribute("lang", "en")
	})

	test("html lang follows the locale cookie", async ({ page, context, baseURL }) => {
		await context.addCookies([{ name: "locale", value: "el", url: baseURL! }])

		await page.goto("/")

		await expect(page.locator("html")).toHaveAttribute("lang", "el")
	})

	test("html lang follows the language dropdown selection", async ({ page }) => {
		await page.goto("/")

		const languageDropdown = page.getByRole("combobox")

		for (const { code, label } of LANGUAGE_OPTIONS) {
			await languageDropdown.click()
			await page.getByRole("option", { name: label }).click()

			await expect(page.locator("html")).toHaveAttribute("lang", code)
		}
	})
})
