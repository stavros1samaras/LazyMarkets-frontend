import MainNavigationMenu from "./NavigationMenu"
import Link from "next/link"
import ThemeButton from "@/_features/_navigation/NavigationButtons/ThemeButton"
import Header from "@/components/elements/Header"
import { cn } from "@/lib/utils"
import GitHubIcon from "@/_features/_navigation/NavigationButtons/GitHubIcon"
import { Div } from "@/components/elements/Div"
import MobileSidebar from "@/_features/_navigation/mobile/MobileSidebar"
import { NAV_ITEMS } from "../config"

export default function DesktopHeader() {
	const fontStyles = "font-[550] text-[19px]"
	const hoverStyles = "transition-transform duration-100 hover:-translate-y-[2px] hover:text-main"

	return (
		<Header className="sticky top-0 z-50 justify-between w-auto h-15 pt-1 px-1">
			<MainNavigationMenu>
				{NAV_ITEMS.map((item) => {
					const Icon = item.icon
					const baseClass = item.alwaysVisible
						? "flex items-center gap-1.5"
						: item.icon
							? "hidden lg:flex items-center gap-1.5"
							: "hidden lg:inline-block gap-1.5"
					const className = cn(fontStyles, hoverStyles, baseClass, item.extraClassNames)

					return (
						<Link
							key={item.label}
							href={item.href}
							prefetch={item.prefetch}
							target={item.external ? "_blank" : undefined}
							data-testid={item.dataTestId}
							className={className}
						>
							{item.label}
							{Icon && <Icon size={19} />}
						</Link>
					)
				})}
			</MainNavigationMenu>
			<Div className="gap-1 w-auto">
				<ThemeButton />
				<GitHubIcon />
				<MobileSidebar />
			</Div>
		</Header>
	)
}
