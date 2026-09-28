"use client"

import React, { createContext } from "react"

export const ChartData = createContext<any>(null)

export function DataProvider({ value, children }: { value: any; children: React.ReactNode }) {
	return <ChartData value={value}>{children}</ChartData>
}
