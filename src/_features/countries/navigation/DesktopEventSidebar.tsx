import SidebarCountry from "./SidebarCountry"
import { Separator } from "../../../components/ui/separator"
import { COUNTRIES } from "../../../constants/countries"
import React from "react"
import SideScrollArea from "@/_features/countries/navigation/SideScrollArea"

export default function DesktopEventSidebar({ type = "countries" }: any) {
	return (
		<aside>
			<SideScrollArea>
				{COUNTRIES.map((asset, index) => (
					<React.Fragment key={index}>
						<SidebarCountry code={asset.code} name={asset.name} />
						<Separator />
					</React.Fragment>
				))}
			</SideScrollArea>
		</aside>
	)
}
