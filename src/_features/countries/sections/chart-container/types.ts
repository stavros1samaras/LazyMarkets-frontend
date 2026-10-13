import type { Categories } from "@/_features/countries/types"
import { ComponentType } from "react"

export interface ChartMetadata {
	chartTitle: string
	description: string
	badge: ComponentType
	category: Categories
}

export interface RenderDataConfig extends ChartMetadata {
	chartData: {
		year: string
		value: number
	}[]
}
