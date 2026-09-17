import { LocaleConfig } from "./types"

export const LOCALES: LocaleConfig[] = [
	{
		code: "el",
		loadTranslations: async () => (await import("../../../public/locales/el/translation.json")).default,
	},
	{
		code: "de",
		loadTranslations: async () => (await import("../../../public/locales/de/translation.json")).default,
	},
	{
		code: "fr",
		loadTranslations: async () => (await import("../../../public/locales/fr/translation.json")).default,
	},
]
