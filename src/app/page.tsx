"use client"
import GradientWaves from "@/components/bits/GradientWaves"
import Main from "@/components/elements/Main"
import Text from "@/components/elements/Text"
import { ExternalLink } from "lucide-react"

export default function Page() {
	return (
		<Main className="flex flex-col items-center justify-center overflow-hidden h-[90vh] xl:h-[92.2vh] mb-2 border border-ring">
			<section className="relative flex flex-1 w-full">
				<GradientWaves
					horizonColor="#4a25d3"
					waveColor="#6366F1"
					crestColor="#3B82F6"
					speed={0.2}
					amplitude={5}
					waveScale={1.05}
					waveRatio={0.55}
					swell={18}
					turbulence={15.5}
					tilt={1.3}
					zoom={1.25}
					height={5}
					fogDepth={25}
					detail="low"
					brightness={1.2}
					opacity={1}
					mouseInteraction={false}
					parallaxStrength={0.5}
					grain={false}
					grainIntensity={0}
					className="absolute inset-0 z-0"
				/>

				<div className="flex flex-col items-center xl:items-start justify-center gap-2 absolute inset-0 z-10 lg:ml-4 p-2 font-light ">
					<Text as="h1" className="text-2xl xl:text-6xl">
						Welcome to LazyMarkets
					</Text>

					<Text as="p" className="max-w-200 text-center xl:text-start">
						Your all-in-one platform for financial market analysis. Access fundamental, technical, sentiment, and global economic
						data to make informed investment decisions.
					</Text>
					<a
						href="https://github.com/stavros1samaras/LazyMarkets-frontend"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1 hover:underline text-foreground underline"
					>
						github
						<ExternalLink className="w-4 h-4 " />
					</a>
				</div>
			</section>
		</Main>
	)
}
