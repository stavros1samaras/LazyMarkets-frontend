import test from "@playwright/test"

export function shouldRunTest() {
	test.skip(process.env.NODE_ENV !== "dev", "Runs only on prod")
}
