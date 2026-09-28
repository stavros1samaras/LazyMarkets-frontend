"use client"

import { cloneElement, useContext } from "react"
import React from "react"

export function ChartLifecycle({ context, children }: { context: React.Context<any>; children: React.ReactElement }) {
	const { display } = useContext(context)

	const child = React.Children.only(children)

	return cloneElement(child, {
		key: display,
	})
}
