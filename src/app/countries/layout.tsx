import DesktopSidebar from "@/_features/countries/sections/navigation/DesktopSidebar"
import Main, { MainContent } from "@/components/elements/Main"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex w-full h-full ">
			<DesktopSidebar />
			<Main>
				<MainContent>{children}</MainContent>
			</Main>
		</div>
	)
}
