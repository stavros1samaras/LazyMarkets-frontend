import { cn } from "@/lib/utils"

type DivProps = React.ComponentProps<"div">

export function Div({ className, ...props }: DivProps) {
	return <div className={cn("flex gap-2 w-full", className)} {...props} />
}
