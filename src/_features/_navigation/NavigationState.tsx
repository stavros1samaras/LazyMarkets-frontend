"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { NavigationMenuItem } from "@/components/ui/navigation-menu"
import { cloneElement } from "react"
import useNavigationState from "./hooks"

interface NavigationStateProps {
	children: React.ReactNode
}

export default function NavigationState({ children }: NavigationStateProps) {
	const { selected } = useNavigationState()
	return (
		<>
			{React.Children.map(children, (child: any, index) => {
				const item = cloneElement(child, {
					className: cn(child.props.className, selected === index && "text-main"),
				})
				return <NavigationMenuItem key={index}>{item}</NavigationMenuItem>
			})}
		</>
	)
}
