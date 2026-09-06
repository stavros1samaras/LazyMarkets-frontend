"use client"

import ContactForm from "@/_features/contact/sections/contact-form/contact-form"
import DevelopersInfo from "@/_features/contact/sections/developers-info/developers-info"
import Main from "@/components/elements/Main"
import Text from "@/components/elements/Text"

export default function Page() {
	return (
		<Main className="flex flex-col w-full xl:w-6/7 max-w-400 mx-auto p-4 border border-ring">
			<section className="grid grid-cols-1 xl:grid-cols-2 gap-4">
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
			</section>
		</Main>
	)
}
