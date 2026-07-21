import * as React from "react"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "../ui/navigation-menu"

interface MainNavigationMenuProps {
	children: React.ReactNode
}

export default function MainNavigationMenu({ children }: MainNavigationMenuProps) {
	return (
		<NavigationMenu>
			<NavigationMenuList className="flex items-center gap-5">
				{React.Children.map(children, (child: any, index) => {
					if (!child) return null
					const className = child.props?.className || ""
					return (
						<NavigationMenuItem key={index} className={className}>
							{child}
						</NavigationMenuItem>
					)
				})}
			</NavigationMenuList>
		</NavigationMenu>
	)
}
