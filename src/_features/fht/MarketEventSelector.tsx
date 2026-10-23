"use client"

import RouteSelector from "@/components/RouteSelector"
import { FHT_EVENTS } from "@/_features/fht/config"

export default function MarketEventSelector({ className }: { className?: string }) {
	return <RouteSelector items={FHT_EVENTS} placeholder="Select a market event" className={className} />
}
