"use client"

import RouteSelector from "@/components/RouteSelector"
import { COUNTRIES } from "@/_features/countries/config"

export default function CountrySelector({ className }: { className: string }) {
	return <RouteSelector items={COUNTRIES} placeholder="Select a country" groupLabel="COUNTRIES" className={className} />
}
