"use client"

import { Fragment, useContext } from "react"
import type { ChartDisplayContextValue } from "@/_features/countries/sections/ChartDisplay.provider"

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
