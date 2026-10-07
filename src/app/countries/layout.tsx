import CountriesHeader from "@/_features/countries/sections/countries-header/countries-header"
import Main from "@/components/elements/Main"
import { getUserAgent } from "@/lib/server/user-agent"
import dynamic from "next/dynamic"

const DesktopSidebar = dynamic(() => import("@/_features/countries/sections/sidebar/CountriesDesktopSidebar"))

export default async function Layout({ children }: { children: React.ReactNode }) {
	const ua = await getUserAgent()

	return (
		<div className="flex flex-col lg:flex-row flex-1 gap-4">
			{ua == "desktop" && <DesktopSidebar />}
			<Main className="flex flex-col flex-1 gap-4">
				<CountriesHeader />
				{children}
			</Main>
		</div>
	)
}
