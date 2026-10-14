"use client"

import type { ChartDisplayContextType } from "@/_features/countries/sections/types"
import { CountryApiData } from "@/_features/countries/types"
import { createContext } from "react"

export const CountryDataContext = createContext<CountryApiData | null>(null)

export const ChartDisplayContext = createContext<ChartDisplayContextType>({
	display: "area",
	setDisplay: () => {},
})
