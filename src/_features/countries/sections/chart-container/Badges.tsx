import { Badge } from "@/components/ui/badge"

export function ChartAbsoluteBadge() {
	return (
		<Badge variant="secondary" className=" h-3.5 lg:h-5 ">
			Abs
		</Badge>
	)
}

export function ChartPercentageBadge() {
	return (
		<Badge variant="secondary" className="h-3.5 lg:h-5">
			Perc
		</Badge>
	)
}

import { cn } from "@/lib/utils"

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
	children: React.ReactNode
}

export function Code({ className, children, ...props }: CodeProps) {
	return (
		<code className={cn("rounded-md bg-muted px-2 font-mono text-sm", className)} {...props}>
			{children}
		</code>
	)
}
