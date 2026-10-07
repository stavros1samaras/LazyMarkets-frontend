"use client"

import dynamic from "next/dynamic"

export const CountrySelectorWrapper = dynamic(
	() => import("@/_features/countries/sections/countries-header/components/CountrySelector")
)

export default function CountrySelector() {
	return <CountrySelectorWrapper className="w-full md:max-w-140 bg-background border-ring text-foreground" />
}
