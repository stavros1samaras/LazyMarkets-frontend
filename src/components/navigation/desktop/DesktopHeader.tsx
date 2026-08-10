import MainNavigationMenu from "./NavigationMenu"
import Link from "next/link"
import ThemeButton from "@/components/navigation/ThemeButton"
import Header from "@/components/elements/Header"
import { cn } from "@/lib/utils"
import GitHubIcon from "@/components/icons/GitHubIcon"
import { Div } from "@/components/elements/Div"
import { ExternalLink, Hammer } from "lucide-react"
import { CompanyLogo } from "@/components/navigation/CompanyLogo"
import MobileSidebar from "@/components/navigation/mobile/MobileSidebar"

export default function DesktopHeader() {
	const fontStyles = "text-[19px] font-[550]"
	const hoverStyles = "transition-transform duration-100 hover:-translate-y-[2px] hover:text-main"

	return (
		<Header className="w-auto h-15 justify-between pt-1 px-4">
			<MainNavigationMenu>
				<CompanyLogo fontStyles={fontStyles} hoverStyles={hoverStyles} />
				<Link
					href="/technical"
					prefetch={false}
					data-testid="techical"
					className={cn("hidden lg:flex items-center gap-1.5", fontStyles, hoverStyles)}
				>
					Technical <Hammer size={19} />
				</Link>
				<Link
					href="/fundamental"
					prefetch={false}
					data-testid="fundamental"
					className={cn("hidden lg:flex items-center gap-1.5", fontStyles, hoverStyles)}
				>
					Fundamental <Hammer size={19} />
				</Link>
				<Link
					href="/sentiment"
					prefetch={false}
					data-testid="sentiment"
					className={cn("hidden lg:flex items-center gap-1.5", fontStyles, hoverStyles)}
				>
					Sentiment <Hammer size={19} />
				</Link>
				<Link href="/countries/GR" data-testid="contact" className={cn("hidden lg:inline-block", fontStyles, hoverStyles)}>
					Countries
				</Link>
				<a
					href="http://lazy-markets-rr.vercel.app/"
					target="_blank"
					data-testid="FHT"
					className={cn("hidden lg:flex items-center gap-1", fontStyles, hoverStyles)}
				>
					FHT <ExternalLink size={19} />
				</a>
				<Link
					href="/contact"
					prefetch={false}
					data-testid="contact"
					className={cn("hidden lg:inline-block", fontStyles, hoverStyles)}
				>
					Contact
				</Link>
			</MainNavigationMenu>
			<Div className="w-auto gap-1">
				<ThemeButton />
				<GitHubIcon />
				<MobileSidebar />
			</Div>
		</Header>
	)
}
