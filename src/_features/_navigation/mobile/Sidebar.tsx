"use client"

import { cn } from "@/lib/utils"
import { MOBILE_NAV_ITEMS } from "../config"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu"
import ActiveLink from "@/_features/_navigation/NavigationState"

type SidebarProps = {
	open: boolean
	onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
	return (
		<>
			{open && <div onClick={onClose} className="fixed inset-0 z-40 bg-black/40" />}

			<aside
				className={cn(
					"fixed top-0 right-0 z-50 h-screen w-72 bg-background shadow-lg transition-transform duration-300",
					open ? "translate-x-0" : "translate-x-full"
				)}
			>
				<NavigationMenu className="flex flex-col items-stretch justify-start w-full p-4">
					<NavigationMenuList className="block">
						{MOBILE_NAV_ITEMS.map((item, index) => {
							const Icon = item.icon
							return (
								<NavigationMenuItem key={item.label} className="text-foreground">
									<ActiveLink
										index={index + 1}
										href={item.href}
										onClick={onClose}
										target={item.external ? "_blank" : undefined}
										className="flex items-center gap-1.5 py-2 text-2xl"
									>
										{item.label}
										{Icon && <Icon size={19} />}
									</ActiveLink>
								</NavigationMenuItem>
							)
						})}
					</NavigationMenuList>
				</NavigationMenu>
			</aside>
		</>
	)
}
