import { cn } from "@/lib/utils"
import { Div } from "@/components/elements/Div"
import { Span } from "@/components/elements/Span"
import Text from "@/components/elements/Text"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { devsInfo } from "@/_features/contact/sections/developers-info/config"

export default function DevelopersInfo({ className }: { className?: string }) {
	return (
		<Card className={cn("relative min-h-0 flex-1 h-full", className)}>
			<div className="grid grid-cols-1 gap-3 xl:absolute inset-0 m-4 overflow-y-scroll scrollbar-hide">
				<DevelopersInfoCards />
			</div>
		</Card>
	)
}

export function DevelopersInfoCards() {
	return (
		<>
			{devsInfo.map((dev, index) => {
				return (
					<Card key={index} className="gap-2 h-fit py-4">
						<CardHeader>
							<CardTitle>{dev.name}</CardTitle>
							<CardDescription>
								<Text as="span">{dev.description}</Text>
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Div className="justify-between">
								<Text as="p">email: </Text>
								<Text as="p">{dev.email}</Text>
							</Div>
							<Div className="justify-between">
								<Text as="p">sector: </Text>
								<Text as="p">{dev.title}</Text>
							</Div>
							<Div className="justify-between">
								<Text as="p">links:</Text>
								<Span className="justify-between gap-2 underline">
									<a href={dev.linkedin} target="_blank" className="flex items-center gap-1 text-foreground">
										<Text as="span">linkedIn</Text>
										<ExternalLink size={13} className="underline" />
									</a>
									<a href={dev.github} target="_blank" className="flex items-center gap-1 text-foreground">
										<Text as="span">gitHub</Text>
										<ExternalLink size={13} />
									</a>
								</Span>
							</Div>
							<div className="flex justify-end"></div>
						</CardContent>
					</Card>
				)
			})}
		</>
	)
}
