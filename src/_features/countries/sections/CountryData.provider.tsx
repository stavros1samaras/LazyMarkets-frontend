"use client"

import { CountryApiData } from "@/_features/countries/types"
import { createContext, ReactNode } from "react"

export const CountryDataContext = createContext<CountryApiData | null>(null)

interface CountryDataProviderProps {
	value: CountryApiData
	children: ReactNode
}

export function CountryDataProvider({ value, children }: CountryDataProviderProps) {
	return <CountryDataContext value={value}>{children}</CountryDataContext>
}
