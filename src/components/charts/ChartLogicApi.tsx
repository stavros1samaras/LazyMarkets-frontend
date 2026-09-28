"use client"

import { cloneElement, useContext, useRef } from "react"
import React from "react"
import { useObserverMount } from "@/hooks/observer"
import { DataProvider } from "./ChartData.provider"

export function ChartDataProvider({ children, data }: { children: React.ReactNode; data: any }) {
	return <DataProvider value={data}>{children}</DataProvider>
}

export function ChartObserver({ children }: { children: React.ReactNode }) {
	const ref = useRef<HTMLDivElement>(null)

	const { visible } = useObserverMount(ref)

	return (
		<div ref={ref} className="min-h-50 [content-visibility:auto] [contain-intrinsic-size:200px]">
			{visible && children}
		</div>
	)
}
