"use client"
import * as React from "react"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu"
import { cloneElement, useState } from "react"
import { usePathname } from "next/navigation"

interface MainNavigationMenuProps {
	children: React.ReactNode
}

export default function MainNavigationMenu({ children }: MainNavigationMenuProps) {
	const pathname = usePathname()
	const value = getValueFromPathname(pathname)

	function getValueFromPathname(pathname: string) {
		if (pathname.startsWith("/countries")) return 4
		if (pathname.startsWith("/se/technical")) return 1
		if (pathname.startsWith("/se/fundamental")) return 2
		if (pathname.startsWith("/se/sentiment")) return 3
		if (pathname.startsWith("/se/contact")) return 6
		return 0
	}

	function getCorrectIndex(index: number) {
		if (index == 5) {
			return getValueFromPathname(pathname)
		} else return index
	}

	const setCorrectIndex = (index: number) => {
		const value = getCorrectIndex(index)
		console.log(value)
		setSelected(value)
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
							setCorrectIndex(index)
						},
					})
					return <NavigationMenuItem key={index}>{item}</NavigationMenuItem>
				})}
			</NavigationMenuList>
		</NavigationMenu>
	)
}
