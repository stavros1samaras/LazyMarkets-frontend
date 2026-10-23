import DesktopSidebar, { SidebarItem } from "@/components/sidebar/DesktopSidebar"
import { SidebarSearchList } from "@/components/sidebar/SidebarSearchList"
import { DesktopOnly, MobileOnly } from "@/components/DeviceConditions"
import Main from "@/components/elements/Main"
import SectionCard from "@/components/elements/SectionCard"
import Text from "@/components/elements/Text"
import { COUNTRIES } from "@/_features/countries/config"
import { CountryItem } from "@/_features/countries/sections/sidebar/CountryItem"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import type { Metadata } from "next"

const CountrySelector = dynamic(() => import("@/_features/countries/sections/countries-header/CountrySelector"))

export const metadata: Metadata = {
	title: {
		default: "Lazy Markets",
		template: "Lazy Markets - %s ",
	},
	description: "Explore economic, trade, labor, demographic, and social indicators for countries worldwide.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col lg:flex-row flex-1 gap-4">
			<Suspense>
				<DesktopOnly>
					<DesktopSidebar>
						<SidebarSearchList data={COUNTRIES} searchKey="label">
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
							<CountrySelector className="w-full md:max-w-140 bg-background border-ring text-foreground" />
						</MobileOnly>
					</Suspense>
				</SectionCard>
				{children}
			</Main>
		</div>
	)
}
