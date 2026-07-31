import { CardContainer } from "@/components/CardContainer"
import Main, { MainContent } from "@/components/elements/Main"
import PageLayout from "@/components/PageLayout"

export default function Page(children: any) {
	return (
		<PageLayout>
			<Main>
				<CardContainer className="flex w-full h-full">
					<div>contact</div>
				</CardContainer>
			</Main>
		</PageLayout>
	)
}
