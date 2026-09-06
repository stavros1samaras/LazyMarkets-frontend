import CountriesHeader from "@/_features/countries/sections/countries-header/countries-header"
import Main from "@/components/elements/Main"
import DesktopSidebar from "@/_features/countries/sections/navigation/sidebar/DesktopSidebar"

export default async function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col lg:flex-row flex-1 gap-4">
			<DesktopSidebar />
			<Main className="flex flex-col flex-1 gap-4">
				<CountriesHeader />
				{children}
			</Main>
		</div>
	)
}
