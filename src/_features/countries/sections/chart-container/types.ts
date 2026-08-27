import { CHART_DATA } from "@/_features/countries/config"
import { ComponentType } from "react"

export interface ChartMetadata {
	chartTitle: string
	description: string
	badge: ComponentType
}

export interface RenderDataConfig extends ChartMetadata {
	chartData: {
		year: string
		value: number
	}[]
}

export type ChartDataKeys = typeof CHART_DATA
