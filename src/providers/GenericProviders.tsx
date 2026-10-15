"use client"

import { type Context as ProviderContextType, type Dispatch, type ReactNode, type SetStateAction, useState } from "react"

interface SimpleProviderProps<T> {
	context: ProviderContextType<T>
	value: T
	children: ReactNode
}
/**
 * A generic provider that supplies a value to a React context.
 * @remarks
 * You can rename the component when importing it to better reflect its purpose.
 * @example
 * import { SimpleProvider as ChartDataProvider } from "@/providers/GenericProviders"
 */
export function SimpleProvider<T>(props: SimpleProviderProps<T>) {
	const Context = props.context
	const value = props.value
	const children = props.children

	return <Context value={value}>{children}</Context>
}

interface StateProviderProps<T> {
	context: ProviderContextType<{ display: T; setDisplay: Dispatch<SetStateAction<T>> }>
	value: T
	children: ReactNode
}
/**
 * A generic provider that supplies a value to a React context.
 * @remarks
 * You can rename the component when importing it to better reflect its purpose.
 * @example
 * import { SimpleProvider as ChartDataProvider } from "@/providers/GenericProviders"
 */
export function StateProvider<T>(props: StateProviderProps<T>) {
	const Context = props.context
	const value = props.value
	const children = props.children

	const [display, setDisplay] = useState(value)

	return <Context value={{ display, setDisplay }}>{children}</Context>
}
