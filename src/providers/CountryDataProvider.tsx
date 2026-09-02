"use client"

import { createContext, ReactNode } from "react"

export const CountryDataContext = createContext<any>(null)

interface CountryDataProviderProps {
	value: object
	children: ReactNode
}

export function CountryDataProvider({ value, children }: CountryDataProviderProps) {
	return <CountryDataContext value={value}>{children}</CountryDataContext>
}
