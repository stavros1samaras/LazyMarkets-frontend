import CountriesHeader from "@/_features/countries/sections/countries-header/countries-header"
import Main from "@/components/elements/Main"
import PageLayout from "@/components/PageLayout"
import DesktopSidebar from "@/_features/countries/sections/navigation/sidebar/DesktopSidebar"

export default async function Layout({ children }: { children: React.ReactNode }) {
	return (
		<PageLayout className="flex-col gap-2 lg:flex-row">
			<DesktopSidebar />
			<Main className="gap-4">
				<CountriesHeader />
				{children}
			</Main>
		</PageLayout>
	)
}
