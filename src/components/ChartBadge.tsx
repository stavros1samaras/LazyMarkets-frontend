import { Badge } from "@/components/ui/badge"
import { ComponentType } from "react"

interface ChartBadgeProps {
	type: ComponentType
}

export default function ChartBadge({ type }: ChartBadgeProps) {
	const Type = type
	return <Type />
}

export function ChartAbsoluteBadge() {
	return <Badge className="bg-neutral h-3.5 translate-y-[1.59px]">A</Badge>
}

export function ChartPercentageBadge() {
	return <Badge className="bg-neutral h-3.5 translate-y-[1.59px]">%</Badge>
}
