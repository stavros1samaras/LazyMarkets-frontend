import { cookies } from "next/headers"
import { LOCALES } from "./config"

export default async function getLanguage() {
	const cookieStore = await cookies()
	const cookieLocale = cookieStore.get("locale")?.value

	const localeConfig = LOCALES.find(({ code }) => code === cookieLocale)

	if (!localeConfig) {
		return {
			locale: "en",
			translationResource: undefined,
		}
	}

	return {
		locale: localeConfig.code,
		translationResource: await localeConfig.loadTranslations(),
	}
}
