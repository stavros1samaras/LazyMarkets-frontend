import DesktopSidebar from "@/_features/countries/sections/navigation/DesktopSidebar"
import Main, { MainContent } from "@/components/elements/Main"
import PageLayout from "@/components/PageLayout"
import { cn } from "@/lib/utils"
import { headers } from "next/headers"
import MobileCountyBar from "@/_features/countries/sections/navigation/MobileCountryBar"

export default async function Layout({ children }: { children: React.ReactNode }) {
	const headersList = await headers()
	const ua = headersList.get("x-device-type")

	return (
		<PageLayout className={cn("gap-2", ua == "mobile" && "flex-col")}>
			{ua == "desktop" ? <DesktopSidebar /> : <MobileCountyBar />}
			<Main>
				<MainContent className="xl:grid-cols-3">{children}</MainContent>
			</Main>
		</PageLayout>
	)
}
