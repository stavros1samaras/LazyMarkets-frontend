"use client"
import { cloneElement, isValidElement } from "react"
import type { ReactElement } from "react"
import { cn } from "@/lib/utils"
import useNavigationState from "./hooks"

interface NavigationStateProps {
	index: number
	children: ReactElement<{ className?: string }>
}

export default function NavigationState({ index, children }: NavigationStateProps) {
	const { selected } = useNavigationState()

	if (!isValidElement(children)) {
		throw new Error("NavigationState expects a valid React element")
	}

	return cloneElement(children, {
		className: cn(children.props.className, selected === index && "text-main"),
	})
}
