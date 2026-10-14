"use client"

import { Fragment, useContext, useRef } from "react"
import React from "react"
import { useObserverMount } from "@/hooks/observer"
import type { ChartDisplayContextValue } from "@/_features/countries/sections/types"

export function ChartObserver({ children }: { children: React.ReactNode }) {
	const ref = useRef<HTMLDivElement>(null)

	const { visible } = useObserverMount(ref)

	return (
		<div ref={ref} className="min-h-50 [content-visibility:auto] [contain-intrinsic-size:200px]">
			{visible && children}
		</div>
	)
}

export function ChartLifecycle({
	context,
	children,
}: {
	context: React.Context<ChartDisplayContextValue>
	children: React.ReactNode
}) {
	const { display } = useContext(context)

	return <Fragment key={display}>{children}</Fragment>
}
