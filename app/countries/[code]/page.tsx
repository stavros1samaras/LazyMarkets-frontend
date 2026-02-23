import findCountryName from "@/_utils/country"
import DesktopEventSidebar from "@/components/DesktopEventSidebar"
import Main from "@/components/Main"
import MainContent from "@/components/MainContent"

export default async function Countries({ params }: { params: Promise<{ code: string }> }) {
	const countryName = findCountryName((await params).code)
	return (
		<div className="flex w-full h-full">
			<DesktopEventSidebar type="events" />

			<Main>
				<MainContent>
					<div>{countryName}</div>
				</MainContent>
			</Main>
		</div>
	)
}
