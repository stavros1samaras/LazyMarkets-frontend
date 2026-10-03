import { COUNTRIES } from "@/_features/countries/config"
import CountriesHeader from "@/_features/countries/sections/countries-header/countries-header"
import { CountryItem } from "@/_features/countries/sections/sidebar/CountryItem"
import DesktopSidebar, { SidebarItem } from "@/components/sidebar/DesktopSidebar"
import { SidebarSearchList } from "@/components/sidebar/SidebarSearchList"
import Main from "@/components/elements/Main"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col lg:flex-row flex-1 gap-4">
			<DesktopSidebar>
				<SidebarSearchList data={COUNTRIES} searchKey="name">
					{COUNTRIES.map((item) => (
						<SidebarItem key={item.code} item={item}>
							<CountryItem item={item} />
						</SidebarItem>
					))}
				</SidebarSearchList>
			</DesktopSidebar>
			<Main className="flex flex-col flex-1 gap-4">
				<CountriesHeader />
				{children}
			</Main>
		</div>
	)
}
