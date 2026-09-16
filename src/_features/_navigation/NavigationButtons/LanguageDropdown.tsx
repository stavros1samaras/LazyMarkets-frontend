"use client"

import { SelectTrigger, SelectValue, SelectContent, SelectItem, Select } from "@/components/ui/select"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

export default function LanguageDropdown() {
	const { i18n } = useTranslation()

	useEffect(() => {
		document.documentElement.lang = i18n.language
	}, [i18n.language])

	return (
		<Select
			defaultValue={i18n.language}
			onValueChange={async (value) => {
				document.cookie = `locale=${value}; path=/; max-age=${60 * 60 * 24 * 365}`
				await i18n.changeLanguage(value)
			}}
		>
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
			</SelectContent>
		</Select>
	)
}
