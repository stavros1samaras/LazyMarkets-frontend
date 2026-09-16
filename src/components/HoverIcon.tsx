import { Button } from "./ui/button"
import { HoverCardTrigger, HoverCardContent, HoverCard } from "./ui/hover-card"
import Text from "./elements/Text"

interface HoverIconProps {
	children: React.ReactNode
	description: string
	className?: string
}

export default function HoverIcon({ children, description, className }: HoverIconProps) {
	return (
		<HoverCard openDelay={10} closeDelay={100}>
			<HoverCardTrigger asChild>
				<Button size={"icon"} variant={"link"} className={className} aria-label="More information" aria-description={description}>
					{children}
				</Button>
			</HoverCardTrigger>
			<HoverCardContent className="flex flex-col gap-0.5 w-64 bg-background border-background">
				<Text as="span">{description}</Text>
			</HoverCardContent>
		</HoverCard>
	)
}
