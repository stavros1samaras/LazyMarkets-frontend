import { Button } from "./ui/button"
import { HoverCardTrigger, HoverCardContent, HoverCard } from "./ui/hover-card"

interface HoverIconProps {
	children: React.ReactNode
	description: string
	className?: string
}

export default function HoverIcon({ children, description, className }: HoverIconProps) {
	return (
		<HoverCard openDelay={10} closeDelay={100}>
			<HoverCardTrigger asChild>
				<Button size={"icon"} variant={"link"} className={className}>
					{children}
				</Button>
			</HoverCardTrigger>
			<HoverCardContent className="flex w-64 flex-col gap-0.5 bg-tertiary border-tertiary">
				<div className="font-semibold  text-foreground">{description}</div>
			</HoverCardContent>
		</HoverCard>
	)
}
