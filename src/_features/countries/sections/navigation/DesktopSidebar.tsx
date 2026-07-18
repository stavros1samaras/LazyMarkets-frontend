"use client"

import SidebarItem from "./SidebarItem"
import { Separator } from "../../../../components/ui/separator"
import { COUNTRIES } from "../../config"
import React, { useState } from "react"
import SideScrollArea from "@/_features/countries/sections/navigation/SideScrollArea"
import { Input } from "@/components/ui/input"
import { Countries } from "@/_features/countries/types"

export default function DesktopSidebar() {
	const [filteredCountries, setCountries] = useState<Countries[]>(COUNTRIES)

	function filter(e: React.ChangeEvent<HTMLInputElement>) {
		const countries: Countries[] = COUNTRIES.filter((country) => {
			if (country.name.toLowerCase().includes(e.target.value.toLowerCase())) return country
		})

		setCountries(countries)
	}

	return (
		<aside>
			<SideScrollArea>
				<Input placeholder="search country" className="w-auto h-7" onChange={(e) => filter(e)} />
				{filteredCountries.map((asset, index) => (
					<React.Fragment key={index}>
						<SidebarItem code={asset.code} name={asset.name} />
						<Separator />
					</React.Fragment>
				))}
			</SideScrollArea>
		</aside>
	)
}
