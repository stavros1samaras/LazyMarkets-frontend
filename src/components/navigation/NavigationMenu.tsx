"use client"
import * as React from "react"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "../ui/navigation-menu"
import { cloneElement, useState } from "react"
import { usePathname } from "next/navigation"

interface MainNavigationMenuProps {
	children: React.ReactNode
}

export default function MainNavigationMenu({ children }: MainNavigationMenuProps) {
	const pathname = usePathname()

	let value

	if (pathname.startsWith("/countries")) {
		value = 6
	} else if (pathname.startsWith("/se/technical")) {
		value = 1
	} else if (pathname.startsWith("/se/fundamental")) {
		value = 2
	} else if (pathname.startsWith("/se/sentiment")) {
		value = 3
	} else if (pathname.startsWith("/se/financial-hishrefry-timeline")) {
		value = 4
	} else if (pathname.startsWith("/se/contact")) {
		value = 5
	} else {
		value = 0
	}

	const [selected, setSelected] = useState(value)
	return (
		<NavigationMenu>
			<NavigationMenuList className="flex items-center gap-5">
				{React.Children.map(children, (child: any, index) => {
					const item = cloneElement(child, {
						className: `${child.props.className ?? ""} ${selected === index ? "text-main" : "text-foreground"}`,
						onClick: (e: React.MouseEvent) => {
							child.props.onClick?.(e)
							setSelected(index)
						},
					})
					return <NavigationMenuItem key={index}>{item}</NavigationMenuItem>
				})}
			</NavigationMenuList>
		</NavigationMenu>
	)
}
