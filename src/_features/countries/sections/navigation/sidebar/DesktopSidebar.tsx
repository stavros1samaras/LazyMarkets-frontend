"use client"

import SidebarItem from "./SidebarItem"
import { COUNTRIES } from "../../../config"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Div } from "@/components/elements/Div"
import { Countries } from "@/_features/countries/sections/navigation/types"

export default function DesktopSidebar() {
	const [filteredCountries, setCountries] = useState<Countries[]>(COUNTRIES)

	function filter(e: React.ChangeEvent<HTMLInputElement>) {
		const countries: Countries[] = COUNTRIES.filter((country) => {
			if (country.name.toLowerCase().includes(e.target.value.toLowerCase())) return country
		})

		setCountries(countries)
	}

	return (
		<aside className="hidden xl:flex xl:sticky xl:top-15 h-[calc(100vh-4.4rem)]">
			<ScrollArea className="h-full w-fit bg-background **:data-[slot=scroll-area-viewport]:overscroll-contain">
				<Div className="flex-col items-start gap-2 w-auto px-1 text-sm">
					<Input placeholder="search country" className="w-auto h-7" onChange={(e) => filter(e)} />
					{filteredCountries.map((asset, index) => (
						<React.Fragment key={index}>
							<SidebarItem code={asset.code} name={asset.name} />
						</React.Fragment>
					))}
				</Div>
				<ScrollBar orientation="vertical" className="w-1" />
			</ScrollArea>
		</aside>
	)
}
