import DesktopSidebar from "@/_features/countries/sections/navigation/DesktopSidebar"
import Main, { MainContent } from "@/components/elements/Main"
import PageLayout from "@/components/PageLayout"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<PageLayout>
			<DesktopSidebar />
			<Main>
				<MainContent>{children}</MainContent>
			</Main>
		</PageLayout>
	)
}
