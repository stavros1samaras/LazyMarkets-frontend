"use client"
import { Card } from "@/components/ui/card"
import { SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem, Select } from "@/components/ui/select"

import Text, { Title } from "@/components/elements/Text"
import { COUNTRIES } from "@/_features/countries/config"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function MobileCountyBar() {
	const router = useRouter()
	return (
		<Card className="rounded-lg p-2 gap-2">
			<div className="flex items-center gap-1">
				<Title as="h1" className="">
					Overview of:
				</Title>
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
										{/* <Link href={`${country.code}`} key={index} className="block p-2"> */}
										{country.name}
										{/* </Link> */}
									</SelectItem>
								)
							})}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			{/* text-(length:--responsive-h1) */}
			<Text className="responsive-h1 text-sm ">Explore key economic indicators and trends</Text>
		</Card>
	)
}
