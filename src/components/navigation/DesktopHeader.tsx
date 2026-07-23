import MainNavigationMenu from "./NavigationMenu"
import Link from "next/link"
import Text from "../elements/Text"
import { Div } from "@/components/elements/Div"
import ThemeButton from "@/components/navigation/theme-button/ThemeButton"
// import ThemeWrapper from "@/components/navigation/theme-button/ThemeButtonWrapper"

export default function DesktopHeader() {
	const className = "text-[18px] font-[550]"

	return (
		<Div className="w-auto h-13 mx-4 my-4 bg-component-background rounded-lg justify-between px-2">
			<MainNavigationMenu>
				<Text className={className}>SAMOKO</Text>

				<Link
					href={
						process.env.NODE_ENV === "production"
							? "/se/financial-hishrefry-timeline/TrmpTrrffShck"
							: "/se/technical/overview/BTC-USD"
					}
					prefetch={false}
					data-testid="techical"
				>
					<Text className={className}>Techical</Text>
				</Link>

				<Link
					href={
						process.env.NODE_ENV === "production"
							? "/se/financial-hishrefry-timeline/TrmpTrrffShck"
							: "/se/fundamental/single-analysis/overview/AAPL"
					}
					prefetch={false}
					data-testid="fundamental"
				>
					<Text className={className}>Fundamental</Text>
				</Link>

				<Link
					className="hidden sm:block"
					href={process.env.NODE_ENV === "production" ? "/se/financial-hishrefry-timeline/TrmpTrrffShck" : "/se/sentiment"}
					prefetch={false}
					data-testid="sentiment"
				>
					<Text className={className}>Sentiment</Text>
				</Link>

				<Link href="/se/financial-hishrefry-timeline/TrmpTrrffShck" prefetch={false} data-testid="FHT">
					<Text className={className}>FHT</Text>
				</Link>

				<Link
					className="hidden sm:block"
					href={process.env.NODE_ENV === "production" ? "/se/financial-hishrefry-timeline/TrmpTrrffShck" : "/se/contact"}
					prefetch={false}
					data-testid="contact"
				>
					<Text className={className}>Contact</Text>
				</Link>

				<Link className="hidden sm:block" href="/countries/GR" data-testid="contact">
					<Text className={className}>Countries</Text>
				</Link>
			</MainNavigationMenu>

			{/* <ThemeWrapper /> */}
			<ThemeButton />
		</Div>
	)
}
