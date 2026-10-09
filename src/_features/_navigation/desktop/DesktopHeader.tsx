import NavigationState from "../NavigationState"
import Link from "next/link"
import { Suspense } from "react"
import ThemeButton from "@/_features/_navigation/NavigationButtons/ThemeButton"
import Header from "@/components/elements/Header"
import Text from "@/components/elements/Text"
import { cn } from "@/lib/utils"
import GitHubIcon from "@/_features/_navigation/NavigationButtons/GitHubIcon"
import { Div } from "@/components/elements/Div"
import MobileSidebar from "@/_features/_navigation/mobile/MobileSidebar"
import { NAV_ITEMS } from "../config"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu"
import LanguageDropdown from "@/_features/_navigation/NavigationButtons/LanguageDropdown"

export default function DesktopHeader() {
	const fontStyles = "font-[550] text-[19px]"
	const hoverStyles = "transition-transform duration-100 hover:-translate-y-[2px] hover:text-main"

	return (
		<Header className="justify-between sticky top-0 z-50 w-auto h-15 pt-1 px-1">
			<NavigationMenu>
				<NavigationMenuList className="flex items-center gap-0 sm:gap-5">
					{NAV_ITEMS.map((item, index) => {
						const Icon = item.icon
						const baseClass = item.alwaysVisible
							? "flex items-center gap-1.5"
							: item.icon
								? "hidden lg:flex items-center gap-1.5"
								: "hidden lg:inline-block gap-1.5"
						const className = cn(fontStyles, hoverStyles, baseClass, "group-data-[selected=true]:text-main", item.extraClassNames)

						const link = (
							<Link
								href={item.href}
								prefetch={item.prefetch}
								target={item.external ? "_blank" : undefined}
								data-testid={item.dataTestId}
								className={className}
							>
								<Text as="span" className="text-inherit">
									{item.label}
								</Text>
								{Icon && <Icon size={19} />}
							</Link>
						)

						return (
							<NavigationMenuItem key={item.label} className="text-foreground">
								{/* <Suspense fallback={link}> */}
								<NavigationState index={index}>{link}</NavigationState>
								{/* </Suspense> */}
							</NavigationMenuItem>
						)
					})}
				</NavigationMenuList>
			</NavigationMenu>
			<Div className="gap-1 w-auto">
				<LanguageDropdown />
				<ThemeButton />
				<GitHubIcon />
				<MobileSidebar />
			</Div>
		</Header>
	)
}
