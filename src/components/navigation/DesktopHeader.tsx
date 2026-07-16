import MainNavigationMenu from "./NavigationMenu"
import Link from "next/link"
import Text from "../elements/Text"

export default function DesktopHeader() {
	return (
		<>
			<MainNavigationMenu>
				<Text>SAMOKO</Text>
				<Link
					href={
						process.env.NODE_ENV === "production"
							? "/se/financial-hishrefry-timeline/TrmpTrrffShck"
							: "/se/technical/overview/BTC-USD"
					}
					prefetch={false}
					data-testid="techical"
				>
					<Text>Techical</Text>
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
					<Text>Fundamental</Text>
				</Link>
				<Link
					className="hidden sm:block"
					href={process.env.NODE_ENV === "production" ? "/se/financial-hishrefry-timeline/TrmpTrrffShck" : "/se/sentiment"}
					prefetch={false}
					data-testid="sentiment"
				>
					<Text>Sentiment</Text>
				</Link>
				<Link href="/se/financial-hishrefry-timeline/TrmpTrrffShck" prefetch={false} data-testid="FHT">
					<Text>FHT</Text>
				</Link>
				<Link
					className="hidden sm:block"
					href={process.env.NODE_ENV === "production" ? "/se/financial-hishrefry-timeline/TrmpTrrffShck" : "/se/contact"}
					prefetch={false}
					data-testid="contact"
				>
					<Text>Contact</Text>
				</Link>
				<Link className="hidden sm:block" href={"/countries/GR"} data-testid="contact">
					<Text>Countries</Text>
				</Link>
			</MainNavigationMenu>
		</>
	)
}
