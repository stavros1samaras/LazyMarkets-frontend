import { Flex, Grid } from "@/components/elements/Containers"
import { Span } from "@/components/elements/Span"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export default function DevelopersInfo() {
	return (
		<>
			<Grid asChild className="grid-cols-1 relative min-h-0 ">
				<Card>
					<Grid className="absolute grid-cols-1 gap-3 inset-0 m-4 overflow-y-scroll  scrollbar-hide ">
						<DevelopersInfoCards />
					</Grid>
				</Card>
			</Grid>
		</>
	)
}

export function DevelopersInfoCards() {
	const devsInfo = [
		{
			name: "Samaras Stavros",
			email: "samaras_st@yahoo.gr",
			title: "Frontend Developer",
			description: "Have a question or need help? Send us a message and we will get back to you.",
			linkedin: "https://www.linkedin.com/in/samaras-stavros",
			github: "https://github.com/samaras-stavros",
		},
		{
			name: "Papadopoulos Nikos",
			email: "nikos.papadopoulos@example.com",
			title: "Backend Developer",
			description: "Responsible for server-side logic, APIs, databases, and application performance.",
			linkedin: "https://www.linkedin.com/in/nikos-papadopoulos",
			github: "https://github.com/nikos-papadopoulos",
		},
		{
			name: "Georgiou Maria",
			email: "maria.georgiou@example.com",
			title: "UI/UX Designer",
			description: "Designs intuitive interfaces and creates consistent user experiences across the application.",
			linkedin: "https://www.linkedin.com/in/maria-georgiou",
			github: "https://github.com/maria-georgiou",
		},
		{
			name: "Konstantinou Andreas",
			email: "andreas.konstantinou@example.com",
			title: "Full Stack Developer",
			description: "Works across both frontend and backend systems to build complete application features.",
			linkedin: "https://www.linkedin.com/in/andreas-konstantinou",
			github: "https://github.com/andreas-konstantinou",
		},
		{
			name: "Nikolaou Eleni",
			email: "eleni.nikolaou@example.com",
			title: "DevOps Engineer",
			description: "Manages deployment pipelines, infrastructure, monitoring, and application reliability.",
			linkedin: "https://www.linkedin.com/in/eleni-nikolaou",
			github: "https://github.com/eleni-nikolaou",
		},
		{
			name: "Nikolaou Eleni",
			email: "eleni.nikolaou@example.com",
			title: "DevOps Engineer",
			description: "Manages deployment pipelines, infrastructure, monitoring, and application reliability.",
			linkedin: "https://www.linkedin.com/in/eleni-nikolaou",
			github: "https://github.com/eleni-nikolaou",
		},
		{
			name: "Nikolaou Eleni",
			email: "eleni.nikolaou@example.com",
			title: "DevOps Engineer",
			description: "Manages deployment pipelines, infrastructure, monitoring, and application reliability.",
			linkedin: "https://www.linkedin.com/in/eleni-nikolaou",
			github: "https://github.com/eleni-nikolaou",
		},
	]

	return (
		<>
			{devsInfo.map((dev, index) => {
				return (
					<Card key={index} className="py-4 h-fit gap-2">
						<CardHeader>
							<CardTitle>{dev.name}</CardTitle>
							<CardDescription>{dev.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<Flex as="div" className="justify-between ">
								<p className="text-foreground">email: </p>
								<p>{dev.email}</p>
							</Flex>
							<Flex className="justify-between">
								<p className="text-foreground">sector: </p>
								<p>{dev.title}</p>
							</Flex>
							<Flex className="justify-between">
								<p className="text-foreground">links:</p>
								<Span className="justify-between gap-2">
									<Flex asChild className="items-center gap-1">
										<a href={dev.linkedin} target="_blank" className="text-foreground">
											linkedIn
											<ExternalLink size={13} />
										</a>
									</Flex>
									<Flex asChild className="items-center gap-1">
										<a href={dev.github} target="_blank" className="text-foreground">
											gitHub
											<ExternalLink size={13} />
										</a>
									</Flex>
								</Span>
							</Flex>
							<div className="flex justify-end"></div>
						</CardContent>
					</Card>
				)
			})}
		</>
	)
}
