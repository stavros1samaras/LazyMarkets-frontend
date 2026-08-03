import * as React from "react"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

type ContainerProps = AsChildTrue | AsElement

interface AsChildTrue {
	asChild: true
	as?: never
	className?: string
	children?: React.ReactNode
}

interface AsElement {
	asChild?: false
	as?: React.ElementType
	className?: string
	children?: React.ReactNode
}

export function Flex({ asChild, as = "div", className, children }: ContainerProps) {
	const Comp = asChild ? Slot.Root : as

	return <Comp className={cn("flex", className)}>{children}</Comp>
}

export function Grid({ asChild, as = "div", className, children }: ContainerProps) {
	const Comp = asChild ? Slot.Root : as

	return <Comp className={cn("grid", className)}>{children}</Comp>
}
