import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from "react"
import { type ReactNode } from "react"

type SimpleTabsProps = {
	children: ReactNode[]
}

export function ChartTabs({ children }: SimpleTabsProps) {
	return (
		<Tabs defaultValue="tab-6">
			<TabsList className="flex flex-wrap bg-[#f5f5f5]">
				{React.Children.map(children, (child: any, index) => {
					if (!child) return null
					const className = child.props?.className || ""
					return (
						<TabsTrigger key={index} value={`tab-${index}`} className={className}>
							{child}
						</TabsTrigger>
					)
				})}
			</TabsList>
		</Tabs>
	)
}
