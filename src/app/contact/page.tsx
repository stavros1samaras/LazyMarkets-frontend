import { CardContainer } from "@/components/CardContainer"
import Main, { MainContent } from "@/components/elements/Main"

export default function Page(children: any) {
	return (
		<div className="flex w-full h-full ">
			<Main>
				<MainContent>
					<CardContainer className="flex w-full h-full">
						<div>contact</div>
					</CardContainer>
				</MainContent>
			</Main>
		</div>
	)
}
