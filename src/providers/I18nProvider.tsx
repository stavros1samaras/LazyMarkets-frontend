"use client"

import type { ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "@/app/i18n"

interface I18nProviderProps {
	children: ReactNode
	translationResource: Record<string, string | Record<string, string>> | undefined
	locale: string
}

export function I18nProvider({ children, translationResource, locale }: I18nProviderProps) {
	if (!i18n.hasResourceBundle(locale, "translation")) {
		i18n.addResourceBundle(locale, "translation", translationResource, true, true)
	}

	if (i18n.language !== locale) {
		i18n.changeLanguage(locale)
	}

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
