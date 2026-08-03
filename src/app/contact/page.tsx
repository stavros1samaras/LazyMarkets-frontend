"use client"

import ContactForm from "@/_features/contact/contactForm"
import DevelopersInfo from "@/_features/contact/DevelopersInfo"
import Main, { MainContent } from "@/components/elements/Main"
import Text from "@/components/elements/Text"
import PageLayout from "@/components/PageLayout"
import { Card } from "@/components/ui/card"

export default function Page() {
	return (
		<PageLayout className="px-2 md:px-70">
			<Main>
				<Card className="p-4">
					<MainContent className="">
						<Text as="h1" className="text-2xl">
							Get in touch with the team
						</Text>
						<Text as="h1" className="text-2xl">
							Contributors information
						</Text>
						<ContactForm />
						<DevelopersInfo />
					</MainContent>
				</Card>
			</Main>
		</PageLayout>
	)
}
