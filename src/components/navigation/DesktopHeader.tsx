import MainNavigationMenu from "./NavigationMenu"
import Link from "next/link"
import Text from "../elements/Text"
import ThemeButton from "@/components/navigation/ThemeButton"
import Header from "@/components/elements/Header"
import { cn } from "@/lib/utils"
import GitHubIcon from "@/components/icons/GitHubIcon"
import { Div } from "@/components/elements/Div"
import { ExternalLink } from "lucide-react"
import { Flex } from "@/components/elements/Containers"

export default function DesktopHeader() {
	const fontStyles = "text-[19px] font-[550]"
	const hoverStyles = "transition-transform duration-100 hover:-translate-y-[2px] hover:text-main"

	return (
		<Header className="w-auto h-15 justify-between pt-1 px-4">
			<MainNavigationMenu>
				<Text asChild className={cn(fontStyles, hoverStyles)}>
					<Link href="/" prefetch={false} data-testid="techical">
						LazyMarkets
					</Link>
				</Text>
				<Text asChild className={cn("inline-block", fontStyles, hoverStyles)}>
					<Link href="/technical" prefetch={false} data-testid="techical">
						Techical
					</Link>
				</Text>
				<Text asChild className={cn("inline-block", fontStyles, hoverStyles)}>
					<Link href="/fundamental" prefetch={false} data-testid="fundamental">
						Fundamental
					</Link>
				</Text>
				<Text asChild className={cn("hidden sm:inline-block", fontStyles, hoverStyles)}>
					<Link href="/sentiment" prefetch={false} data-testid="sentiment">
						Sentiment
					</Link>
				</Text>
				{/* className={cn(fontStyles, hoverStyles)} */}
				<Flex asChild className={cn("hidden sm:flex", fontStyles, hoverStyles)}>
					<Text asChild>
						<Flex asChild className="items-center gap-1">
							<a href="http://lazy-markets-rr.vercel.app/" target="_blank" data-testid="FHT">
								FHT
								<ExternalLink size={20} />
							</a>
						</Flex>
					</Text>
				</Flex>
				<Text asChild className={cn("hidden sm:inline-block", fontStyles, hoverStyles)}>
					<Link href="/contact" prefetch={false} data-testid="contact">
						Contact
					</Link>
				</Text>

				<Text asChild className={cn("hidden sm:inline-block", fontStyles, hoverStyles)}>
					<Link href="/countries/GR" data-testid="contact">
						Countries
					</Link>
				</Text>
			</MainNavigationMenu>
			<Div className="w-auto gap-1">
				<ThemeButton />
				<GitHubIcon />
			</Div>
		</Header>
	)
}
