"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Div } from "@/components/elements/Div"
import { Countries } from "@/_features/countries/types"

interface SidebarSearchListProps {
	data: Countries[]
	searchKey: keyof Countries
	children: React.ReactNode
}

export function SidebarSearchList({ data, searchKey, children }: SidebarSearchListProps) {
	const [query, setQuery] = useState("")

	const childrenArray = React.Children.toArray(children)

	const filteredChildren = childrenArray.filter((_, index) => {
		const item = data[index]
		return item[searchKey].toLowerCase().includes(query.toLowerCase())
	})

	return (
		<Div className="flex-col items-start gap-2 w-auto text-sm">
			<Input placeholder="search country" className="w-auto h-7" value={query} onChange={(e) => setQuery(e.target.value)} />
			{filteredChildren}
		</Div>
	)
}
