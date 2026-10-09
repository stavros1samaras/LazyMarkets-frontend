// import CountriesHeader from "@/_features/countries/sections/countries-header/countries-header"
import DesktopSidebar, { SidebarItem } from "@/components/sidebar/DesktopSidebar"
import { SidebarSearchList } from "@/components/sidebar/SidebarSearchList"
import DesktopOnly from "@/components/DesktopOnly"
import Main from "@/components/elements/Main"
import { COUNTRIES } from "@/_features/countries/configs/config"
import { CountryItem } from "@/_features/countries/sections/sidebar/CountryItem"
import { Suspense } from "react"

// export const instant = false

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col lg:flex-row flex-1 gap-4">
			<Suspense fallback={null}>
				<DesktopOnly>
					<DesktopSidebar>
						<SidebarSearchList data={COUNTRIES} searchKey="name">
							{COUNTRIES.map((item) => (
								<SidebarItem key={item.code} item={item}>
									<CountryItem item={item} />
								</SidebarItem>
							))}
						</SidebarSearchList>
					</DesktopSidebar>
				</DesktopOnly>
			</Suspense>
			<Main className="flex flex-col flex-1 gap-4">
				{/* <CountriesHeader /> */}
				{children}
			</Main>
		</div>
	)
}
