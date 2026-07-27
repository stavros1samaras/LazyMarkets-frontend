import { cn } from "@/lib/utils"

type HeaderProps = React.ComponentProps<"header">

export default function Header({ className, ...props }: HeaderProps) {
	return <header className={cn("flex items-center gap-2 w-full bg-background", className)} {...props} />
}
