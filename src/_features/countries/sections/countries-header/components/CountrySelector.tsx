"use client"

import { useRouter } from "next/navigation"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select"
import { COUNTRIES } from "@/_features/countries/config"

interface CountrySelectorProps {
	className?: string
}

export default function CountrySelector({ className }: CountrySelectorProps) {
	const router = useRouter()

	return (
		<Select
			onValueChange={(code) => {
				router.push(`${code}`)
			}}
		>
			<SelectTrigger size="sm" className={className}>
				<SelectValue placeholder="Select a country" />
			</SelectTrigger>
			<SelectContent className="bg-background border-ring text-foreground" position="popper" side="bottom">
				<SelectGroup>
					<SelectLabel>COUNTRIES</SelectLabel>
					{COUNTRIES.map((country, index) => (
						<SelectItem value={country.code} key={index}>
							{country.name}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
