export type TranslationResource = Record<string, string | Record<string, string>>

export interface LocaleConfig {
	code: string
	loadTranslations: () => Promise<TranslationResource>
}
