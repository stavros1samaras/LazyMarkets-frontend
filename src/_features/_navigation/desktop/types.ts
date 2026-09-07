import { ComponentType } from "react"

export interface NavItemConfig {
	label: string
	href: string
	icon?: ComponentType<{ size?: number }>
	dataTestId?: string
	external?: boolean
	prefetch?: boolean
	alwaysVisible?: boolean
	extraClassNames?: string
}
