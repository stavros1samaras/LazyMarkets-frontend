// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client"

import SidebarItem from "./SidebarItem"
import { Separator } from "../../../../components/ui/separator"
import { COUNTRIES } from "../../config"
import React, { ChangeEvent, useState } from "react"
import SideScrollArea from "@/_features/countries/sections/navigation/SideScrollArea"
import { Input } from "@/components/ui/input"
import { Countries } from "@/_features/countries/types"

export default function DesktopSidebar() {
	// should change the type Countries to Countries[]
	// type Countries will not be tuple
	const [filteredCountries, setCountries] = useState<Countries>(COUNTRIES)

	function filter(e: React.ChangeEvent<HTMLInputElement>) {
		const countries = COUNTRIES.filter((country) => {
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
