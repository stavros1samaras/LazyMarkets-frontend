"use client"

import ContactForm from "@/_features/contact/contact-form/contactForm"
import DevelopersInfo from "@/_features/contact/developers-info/DevelopersInfo"
import Main, { MainContent } from "@/components/elements/Main"
import Text from "@/components/elements/Text"
import PageLayout from "@/components/PageLayout"
import { Card } from "@/components/ui/card"

export default function Page() {
	return (
		<PageLayout className="px-2 md:px-30 lg:px-50 ">
			<Main>
				<Card className="p-4">
					<MainContent>
						<div className="flex flex-col gap-4">
							<Text as="h1" className="text-2xl">
								Get in touch with the team
							</Text>
							<ContactForm />
						</div>
						<div className="flex flex-col gap-4 h-full">
							<Text as="h1" className="text-2xl">
								Contributors information
							</Text>
							<DevelopersInfo />
						</div>
					</MainContent>
				</Card>
			</Main>
		</PageLayout>
	)
}
