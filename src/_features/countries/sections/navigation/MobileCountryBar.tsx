"use client"
import { Card } from "@/components/ui/card"
import { SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem, Select } from "@/components/ui/select"

import Text from "@/components/elements/Text"
import { COUNTRIES } from "@/_features/countries/config"
import { useRouter } from "next/navigation"

export default function MobileCountyBar() {
	const router = useRouter()
	return (
		<Card className="rounded-lg p-2 gap-2">
			<div className="flex items-center gap-1">
				<Text as="h1" className="text-base md:text-2xl font-semibold leading-none">
					{/* i will fix typography later */}
					Overview of:
				</Text>
				<Select
					onValueChange={(code) => {
						router.push(`${code}`)
					}}
				>
					<SelectTrigger size="sm" className="w-fit !h-5 md:!h-8 bg-background text-foreground border-ring">
						<SelectValue placeholder="Select a fruit" />
					</SelectTrigger>
					<SelectContent className="bg-background text-foreground border border-ring" position="popper" side="bottom">
						<SelectGroup>
							<SelectLabel>COUNTRIES</SelectLabel>
							{COUNTRIES.map((country, index) => {
								return (
									<SelectItem value={country.code} key={index}>
										{country.name}
									</SelectItem>
								)
							})}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<Text as="p">Explore key economic indicators and trends</Text>
		</Card>
	)
}
