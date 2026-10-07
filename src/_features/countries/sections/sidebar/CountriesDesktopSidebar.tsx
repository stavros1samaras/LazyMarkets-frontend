import DesktopSidebar, { SidebarItem } from "@/components/sidebar/DesktopSidebar"
import { SidebarSearchList } from "@/components/sidebar/SidebarSearchList"
import { COUNTRIES } from "@/_features/countries/configs/config"
import { CountryItem } from "@/_features/countries/sections/sidebar/CountryItem"

export default function CountriesDesktopSidebar() {
	return (
		<DesktopSidebar>
			<SidebarSearchList data={COUNTRIES} searchKey="name">
				{COUNTRIES.map((item) => (
					<SidebarItem key={item.code} item={item}>
						<CountryItem item={item} />
					</SidebarItem>
				))}
			</SidebarSearchList>
		</DesktopSidebar>
	)
}
