import { cookies } from "next/headers"

const localesConfig = {
	en: () => import("../../public/locales/en/translation.json"),
	el: () => import("../../public/locales/el/translation.json"),
} as const

type Locale = keyof typeof localesConfig

export default async function getLanguage() {
	const cookieStore = await cookies()
	const cookieLocale = cookieStore.get("locale")?.value

	const locale: Locale = cookieLocale === "en" || cookieLocale === "el" ? cookieLocale : "en"

	const translations = await localesConfig[locale]()

	return {
		locale,
		translations,
	}
}
