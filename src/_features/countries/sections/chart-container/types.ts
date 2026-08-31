import { CHART_DATA } from "@/_features/countries/config"
import { ComponentType } from "react"

export type ChartCategory = "economy" | "trade" | "labor" | "demographics" | "social"

export interface ChartMetadata {
	chartTitle: string
	description: string
	badge: ComponentType
	category: ChartCategory
}

export interface RenderDataConfig extends ChartMetadata {
	chartData: {
		year: string
		value: number
	}[]
}

export type ChartDataKeys = typeof CHART_DATA
