import DesktopSidebar, { SidebarItem } from "@/components/sidebar/DesktopSidebar"
import { SidebarSearchList } from "@/components/sidebar/SidebarSearchList"
import { DesktopOnly, MobileOnly } from "@/components/DeviceConditions"
import Main from "@/components/elements/Main"
import SectionCard from "@/components/elements/SectionCard"
import Text from "@/components/elements/Text"
import CountrySelector from "@/_features/countries/sections/countries-header/CountrySelector.CSR"
import { COUNTRIES } from "@/_features/countries/config"
import { CountryItem } from "@/_features/countries/sections/sidebar/CountryItem"
import { Suspense } from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col lg:flex-row flex-1 gap-4">
			<Suspense>
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
				<SectionCard>
					<Text as="h1" className="leading-none">
						Country Market Data
					</Text>
					<Text className="text-foreground">
						Select a country to explore its economy, trade, labor, demographics, and social indicators.
					</Text>
					<Suspense>
						<MobileOnly>
							<CountrySelector />
						</MobileOnly>
					</Suspense>
				</SectionCard>
				{children}
			</Main>
		</div>
	)
}
