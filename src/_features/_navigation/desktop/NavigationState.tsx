"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { NavigationMenuItem } from "@/components/ui/navigation-menu"
import { cloneElement, useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface NavigationStateProps {
	children: React.ReactNode
}

export default function NavigationState({ children }: NavigationStateProps) {
	const pathname = usePathname()
	const [selected, setSelected] = useState(-1)

	function getValueFromPathname(pathname: string) {
		if (pathname.startsWith("/countries")) return 4
		if (pathname.startsWith("/technical")) return 1
		if (pathname.startsWith("/fundamental")) return 2
		if (pathname.startsWith("/sentiment")) return 3
		if (pathname.startsWith("/contact")) return 6

		return 0
	}

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setSelected(getValueFromPathname(pathname))
	}, [pathname])
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
