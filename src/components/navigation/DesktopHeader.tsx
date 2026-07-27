import MainNavigationMenu from "./NavigationMenu"
import Link from "next/link"
import Text from "../elements/Text"
import ThemeButton from "@/components/navigation/ThemeButton"
import Header from "@/components/elements/Header"

export default function DesktopHeader() {
	const className = "text-[18px] font-[550]"

	return (
		<Header className="w-auto h-13 mx-4 my-4 rounded-lg justify-between px-2">
			<MainNavigationMenu>
				<Text className={className}>SAMOKO</Text>
				<Text asChild className={className}>
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
				<Text asChild className={className}>
					<Link
						href={
							process.env.NODE_ENV === "production"
								? "/se/financial-hishrefry-timeline/TrmpTrrffShck"
								: "/se/fundamental/single-analysis/overview/AAPL"
						}
						prefetch={false}
						data-testid="fundamental"
					>
						Fundamental
					</Link>
				</Text>
				<Text asChild className={className}>
					<Link
						className="hidden sm:block"
						href={process.env.NODE_ENV === "production" ? "/se/financial-hishrefry-timeline/TrmpTrrffShck" : "/se/sentiment"}
						prefetch={false}
						data-testid="sentiment"
					>
						Sentiment
					</Link>
				</Text>
				<Text asChild className={className}>
					<Link href="/se/financial-hishrefry-timeline/TrmpTrrffShck" prefetch={false} data-testid="FHT">
						FHT
					</Link>
				</Text>
				<Text asChild className={className}>
					<Link
						className="hidden sm:block"
						href={process.env.NODE_ENV === "production" ? "/se/financial-hishrefry-timeline/TrmpTrrffShck" : "/se/contact"}
						prefetch={false}
						data-testid="contact"
					>
						Contact
					</Link>
				</Text>
				<Text asChild className={className}>
					<Link className="hidden sm:block" href="/countries/GR" data-testid="contact">
						Countries
					</Link>
				</Text>
			</MainNavigationMenu>
			<ThemeButton />
		</Header>
	)
}
