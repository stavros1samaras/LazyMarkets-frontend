import { Span } from "@/components/elements/Span"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DevelopersInfo() {
	const devsInfo = [
		{
			name: "Samaras Stavros",
			email: "samaras_st@yahoo.gr",
			title: "Frontend Developer",
			description: "Have a question or need help? Send us a message and we will get back to you.",
		},
		{
			name: "Papadopoulos Nikos",
			email: "nikos.papadopoulos@example.com",
			title: "Backend Developer",
			description: "Responsible for server-side logic, APIs, databases, and application performance.",
		},
		{
			name: "Georgiou Maria",
			email: "maria.georgiou@example.com",
			title: "UI/UX Designer",
			description: "Designs intuitive interfaces and creates consistent user experiences across the application.",
		},
		{
			name: "Konstantinou Andreas",
			email: "andreas.konstantinou@example.com",
			title: "Full Stack Developer",
			description: "Works across both frontend and backend systems to build complete application features.",
		},
		{
			name: "Nikolaou Eleni",
			email: "eleni.nikolaou@example.com",
			title: "DevOps Engineer",
			description: "Manages deployment pipelines, infrastructure, monitoring, and application reliability.",
		},
		{
			name: "Nikolaou Eleni",
			email: "eleni.nikolaou@example.com",
			title: "DevOps Engineer",
			description: "Manages deployment pipelines, infrastructure, monitoring, and application reliability.",
		},
		{
			name: "Nikolaou Eleni",
			email: "eleni.nikolaou@example.com",
			title: "DevOps Engineer",
			description: "Manages deployment pipelines, infrastructure, monitoring, and application reliability.",
		},
	]

	return (
		<>
			<Card className="grid grid-cols-1 relative min-h-0 ">
				<div className="grid grid-cols-1 absolute inset-0 overflow-y-scroll gap-3 scrollbar-hide m-4">
					{devsInfo.map((dev, index) => {
						return (
							<Card key={index} className="py-4 h-fit gap-2">
								<CardHeader>
									<CardTitle>{dev.name}</CardTitle>
									<CardDescription>{dev.description}</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex justify-between ">
										<p className="text-foreground">email: </p>
										<p>{dev.email}</p>
									</div>
									<div className="flex justify-between">
										<p className="text-foreground">sector: </p>
										<p>{dev.title}</p>
									</div>
									<div className="flex justify-between">
										<p className="text-foreground">links:</p>
										<Span className="justify-between gap-1">
											<p className="text-foreground">linkedIn</p>
											<p className="text-foreground"> gitHub</p>
										</Span>
									</div>
									<div className="flex justify-end"></div>
								</CardContent>
							</Card>
						)
					})}
				</div>
			</Card>
		</>
	)
}
