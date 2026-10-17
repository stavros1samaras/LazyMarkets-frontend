import { test, expect } from "@playwright/test"

const THEME_STORAGE_KEY = "theme"
const TOGGLE_LABELS_BY_THEME = {
	light: "Switch to dark theme",
	dark: "Switch to light theme",
} as const

test.describe("theme", () => {
	test("html defaults to the light theme without a stored preference", async ({ page }) => {
		await page.goto("/")

		const themeToggle = page.getByRole("button", { name: TOGGLE_LABELS_BY_THEME.light })

		await expect(themeToggle, "light theme should offer switching to dark").toBeVisible()
		await expect(page.locator("html"), "html should carry the light theme class").toContainClass("light")
		await expect(page.locator("html"), "html should not carry the dark theme class").not.toContainClass("dark")
	})

	test("theme toggle switches to dark and persists across reloads", async ({ page }) => {
		await page.goto("/")

		await page.getByRole("button", { name: TOGGLE_LABELS_BY_THEME.light }).click()

		await expect(page.locator("html"), "html should carry the dark theme class").toContainClass("dark")
		expect(await page.evaluate((key) => localStorage.getItem(key), THEME_STORAGE_KEY)).toBe("dark")

		await page.reload()

		await expect(page.locator("html"), "dark theme should survive a reload").toContainClass("dark")
		await expect(
			page.getByRole("button", { name: TOGGLE_LABELS_BY_THEME.dark }),
			"dark theme should offer switching to light"
		).toBeVisible()
	})

	test("theme toggle switches back to light", async ({ page }) => {
		await page.addInitScript((key) => localStorage.setItem(key, "dark"), THEME_STORAGE_KEY)

		await page.goto("/")

		await expect(page.locator("html"), "dark theme should be applied on load").toContainClass("dark")

		await page.getByRole("button", { name: TOGGLE_LABELS_BY_THEME.dark }).click()

		await expect(page.locator("html"), "html should no longer carry the dark theme class").not.toContainClass("dark")
		expect(await page.evaluate((key) => localStorage.getItem(key), THEME_STORAGE_KEY)).toBe("light")
	})

	test("stored theme is applied on load", async ({ page }) => {
		await page.addInitScript((key) => localStorage.setItem(key, "dark"), THEME_STORAGE_KEY)

		await page.goto("/")

		await expect(page.locator("html"), "stored dark theme should be applied").toContainClass("dark")
		expect(
			await page.evaluate(() => document.documentElement.style.colorScheme),
			"color-scheme should match the dark theme"
		).toBe("dark")
	})

	test("theme toggle updates the color-scheme of the document", async ({ page }) => {
		await page.goto("/")

		await expect(page.getByRole("button", { name: TOGGLE_LABELS_BY_THEME.light }), "theme toggle should be mounted").toBeVisible()

		expect(
			await page.evaluate(() => document.documentElement.style.colorScheme),
			"color-scheme should match the light theme"
		).toBe("light")

		await page.getByRole("button", { name: TOGGLE_LABELS_BY_THEME.light }).click()

		await expect(page.locator("html"), "html should carry the dark theme class").toContainClass("dark")
		expect(
			await page.evaluate(() => document.documentElement.style.colorScheme),
			"color-scheme should match the dark theme"
		).toBe("dark")
	})
})
