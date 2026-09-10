"use client"

import { SelectTrigger, SelectValue, SelectContent, SelectItem, Select } from "@/components/ui/select"

export default function LanguageDropdown() {
	return (
		<Select>
			<SelectTrigger className="w-17">
				<SelectValue placeholder="EN" />
			</SelectTrigger>
			<SelectContent className="w-17 min-w-15 border border-ring" position="popper">
				<SelectItem value="apple">EN</SelectItem>
				<SelectItem value="banana">EL</SelectItem>
			</SelectContent>
		</Select>
	)
}
