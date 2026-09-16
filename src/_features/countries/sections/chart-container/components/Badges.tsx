import { Badge } from "@/components/ui/badge"
import Text from "@/components/elements/Text"

export function ChartAbsoluteBadge() {
	return (
		<Badge variant="outline" className="h-3.5 lg:h-5">
			<Text as="span">Abs</Text>
		</Badge>
	)
}

export function ChartPercentageBadge() {
	return (
		<Badge variant="outline" className="h-3.5 lg:h-5">
			<Text as="span">Perc</Text>
		</Badge>
	)
}
