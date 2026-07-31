import MainNavigationMenu from "./NavigationMenu"
import Link from "next/link"
import Text from "../elements/Text"
import ThemeButton from "@/components/navigation/ThemeButton"
import Header from "@/components/elements/Header"
import { cn } from "@/lib/utils"

export default function DesktopHeader() {
	const fontStyles = "text-[19px] font-[550]"
	const hoverStyles = "transition-transform duration-100 hover:-translate-y-[2px] hover:text-main"

	return (
		<Header className="w-auto h-13 justify-between pt-1 px-4">
			<MainNavigationMenu>
				<Text className={cn(fontStyles, hoverStyles)}>SAMOKO</Text>
				<Text asChild className={cn("inline-block", fontStyles, hoverStyles)}>
					<Link
						href={
							process.env.NODE_ENV === "production"
								? "/se/financial-hishrefry-timeline/TrmpTrrffShck"
								: "/se/technical/overview/BTC-USD"
						}
						prefetch={false}
						data-testid="techical"
					>
						Techical
					</Link>
				</Text>
				<Text asChild className={cn("inline-block", fontStyles, hoverStyles)}>
					<Link
						href={process.env.NODE_ENV === "production" ? "/se/financial-hishrefry-timeline/TrmpTrrffShck" : "/countries/GR"}
						prefetch={false}
						data-testid="fundamental"
					>
						Fundamental
					</Link>
				</Text>
				<Text asChild className={cn("hidden sm:inline-block", fontStyles, hoverStyles)}>
					<Link
						href={process.env.NODE_ENV === "production" ? "/se/financial-hishrefry-timeline/TrmpTrrffShck" : "/se/sentiment"}
						prefetch={false}
						data-testid="sentiment"
					>
						Sentiment
					</Link>
				</Text>
				<Text asChild className={cn("hidden sm:inline-block", fontStyles, hoverStyles)}>
					<a href="http://lazy-markets-rr.vercel.app/" target="_blank" data-testid="FHT">
						FHT
					</a>
				</Text>
				<Text asChild className={cn("hidden sm:inline-block", fontStyles, hoverStyles)}>
					<Link
						href={process.env.NODE_ENV === "production" ? "/se/financial-hishrefry-timeline/TrmpTrrffShck" : "/contact"}
						prefetch={false}
						data-testid="contact"
					>
						Contact
					</Link>
				</Text>
				<Text asChild className={cn("hidden sm:inline-block", fontStyles, hoverStyles)}>
					<Link href="/countries/GR" data-testid="contact">
						Countries
					</Link>
				</Text>
			</MainNavigationMenu>
			<ThemeButton />
		</Header>
	)
}
