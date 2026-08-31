import { cn } from "@/lib/utils"
import React from "react"

interface TextProps extends React.HTMLAttributes<HTMLElement> {
	asChild?: boolean
	as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div"
}

export default function Text({ asChild = false, as = "p", className, children, ...props }: TextProps) {
	if (asChild) {
		if (!React.isValidElement(children)) {
			throw new Error("Text with asChild requires a single React element.")
		}

		const child = children as React.ReactElement<{ className?: string }>
		return React.cloneElement(child, {
			...props,
			className: cn(child.props.className || "", "text-foreground", className),
		})
	}

	const Tag = as
	return (
		<Tag className={cn(`text-foreground text-responsive-${as}`, className)} {...props}>
			{children}
		</Tag>
	)
}
