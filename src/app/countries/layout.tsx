"use client"

import CountriesHeader from "@/_features/countries/sections/countries-header/countries-header"
import SidebarSearchItem from "@/_features/countries/sections/navigation/sidebar/SidebarSearchItem"
import Main from "@/components/elements/Main"
import DesktopSidebar, { SidebarSearchList } from "@/components/sidebar/DesktopSidebar"
import { COUNTRIES } from "@/_features/countries/config"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col lg:flex-row flex-1 gap-4">
			<DesktopSidebar>
				<SidebarSearchList data={COUNTRIES} searchKey="name">
					{(item) => <SidebarSearchItem item={item} />}
				</SidebarSearchList>
			</DesktopSidebar>
			<Main className="flex flex-col flex-1 gap-4">
				<CountriesHeader />
				{children}
			</Main>
		</div>
	)
}
