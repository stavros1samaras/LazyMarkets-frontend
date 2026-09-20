"use client"

import { useRouter } from "next/navigation"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select"
import Text from "@/components/elements/Text"
import { COUNTRIES } from "@/_features/countries/config"
import { useTranslation } from "react-i18next"

interface CountrySelectorProps {
	className?: string
}

export default function CountrySelector({ className }: CountrySelectorProps) {
	const router = useRouter()
	const { t } = useTranslation()

	return (
		<Select
			onValueChange={(code) => {
				router.push(`${code}`)
			}}
		>
			<SelectTrigger size="sm" className={className}>
				<SelectValue placeholder={t(`Select a country`)} />
			</SelectTrigger>
			<SelectContent className="bg-background border-ring text-foreground" position="popper" side="bottom">
				<SelectGroup>
					<SelectLabel>
						<Text as="span">COUNTRIES</Text>
					</SelectLabel>
					{COUNTRIES.map((country, index) => (
						<SelectItem value={country.code} key={index} className="focus:bg-select-item">
							<Text as="span">{country.name}</Text>
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
