import MainNavigationMenu from "./NavigationMenu"
import Link from "next/link"
import Text from "../elements/Text"
import ThemeButton from "@/components/navigation/ThemeButton"
import Header from "@/components/elements/Header"
import { cn } from "@/lib/utils"
import GitHubIcon from "@/components/icons/GitHubIcon"
import { Div } from "@/components/elements/Div"
import { ExternalLink, Hammer } from "lucide-react"
import { Flex } from "@/components/elements/Containers"
import { CompanyLogo } from "@/components/navigation/CompanyLogo"

export default function DesktopHeader() {
	const fontStyles = "text-[19px] font-[550]"
	const hoverStyles = "transition-transform duration-100 hover:-translate-y-[2px] hover:text-main"

	return (
		<Header className="w-auto h-15 justify-between pt-1 px-4">
			<MainNavigationMenu>
				<CompanyLogo fontStyles={fontStyles} hoverStyles={hoverStyles} />

				<Text asChild className={cn("flex", fontStyles, hoverStyles)}>
					<Flex asChild className="items-center gap-1.5">
						<Link href="/technical" prefetch={false} data-testid="techical">
							Technical
							<Hammer size={19} />
						</Link>
					</Flex>
				</Text>
				<Text asChild className={cn("flex", fontStyles, hoverStyles)}>
					<Flex asChild className="items-center gap-1.5">
						<Link href="/fundamental" prefetch={false} data-testid="fundamental">
							Fundamental
							<Hammer size={19} />
						</Link>
					</Flex>
				</Text>
				<Text asChild className={cn("hidden sm:flex", fontStyles, hoverStyles)}>
					<Flex asChild className="items-center gap-1.5">
						<Link href="/sentiment" prefetch={false} data-testid="sentiment">
							Sentiment
							<Hammer size={19} />
						</Link>
					</Flex>
				</Text>
				<Text asChild className={cn("hidden sm:inline-block", fontStyles, hoverStyles)}>
					<Link href="/countries/GR" data-testid="contact">
						Countries
					</Link>
				</Text>
				<Flex asChild className={cn("hidden sm:flex", fontStyles, hoverStyles)}>
					<Text asChild>
						<Flex asChild className="items-center gap-1">
							<a href="http://lazy-markets-rr.vercel.app/" target="_blank" data-testid="FHT">
								FHT
								<ExternalLink size={19} />
							</a>
						</Flex>
					</Text>
				</Flex>
				<Text asChild className={cn("hidden sm:inline-block", fontStyles, hoverStyles)}>
					<Link href="/contact" prefetch={false} data-testid="contact">
						Contact
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
