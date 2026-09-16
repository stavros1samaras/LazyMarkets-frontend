"use client"

import { I18nextProvider } from "react-i18next"
import i18n from "@/app/i18n"

export function I18nProvider({ children, translations, locale }: any) {
	if (i18n.language !== locale) {
		i18n.changeLanguage(locale)
	}

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
