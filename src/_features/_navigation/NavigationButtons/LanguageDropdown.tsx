"use client"

import useDocumentLanguage from "@/_features/_translation/hooks"
import { SelectTrigger, SelectValue, SelectContent, SelectItem, Select } from "@/components/ui/select"
import { useTranslation } from "react-i18next"

export default function LanguageDropdown() {
	const { i18n } = useTranslation()

	useDocumentLanguage(i18n.language)

	const handleLanguageChange = async (value: string) => {
		document.cookie = `locale=${value}; path=/; max-age=${60 * 60 * 24 * 365}`

		if (!i18n.hasResourceBundle(value, "translation")) {
			const response = await fetch(`/locales/${value}/translation.json`)
			const translationResource = await response.json()
			i18n.addResourceBundle(value, "translation", translationResource, true, true)
		}
		await i18n.changeLanguage(value)
	}

	return (
		<Select defaultValue={i18n.language} onValueChange={(value) => handleLanguageChange(value)}>
			<SelectTrigger className="w-17 text-foreground">
				<SelectValue placeholder={i18n.language} />
			</SelectTrigger>
			<SelectContent className="w-17 min-w-15 border border-ring text-foreground" position="popper">
				<SelectItem value="en" className="focus:bg-select-item">
					EN
				</SelectItem>
				<SelectItem value="el" className="focus:bg-select-item">
					EL
				</SelectItem>
				<SelectItem value="de" className="focus:bg-select-item">
					DE
				</SelectItem>
				<SelectItem value="fr" className="focus:bg-select-item">
					FR
				</SelectItem>
			</SelectContent>
		</Select>
	)
}
