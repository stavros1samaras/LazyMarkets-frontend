import { ComponentType } from "react"

interface ChartBadgeProps {
	type: ComponentType
}

export default function ChartBadge({ type }: ChartBadgeProps) {
	const Type = type
	return <Type />
}
