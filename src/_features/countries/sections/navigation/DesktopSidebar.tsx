import SidebarItem from "./SidebarItem"
import { Separator } from "../../../../components/ui/separator"
import { COUNTRIES } from "../../config"
import React from "react"
import SideScrollArea from "@/_features/countries/sections/navigation/SideScrollArea"

export default function DesktopSidebar() {
	return (
		<aside>
			<SideScrollArea>
				{COUNTRIES.map((asset, index) => (
					<React.Fragment key={index}>
						<SidebarItem code={asset.code} name={asset.name} />
						<Separator />
					</React.Fragment>
				))}
			</SideScrollArea>
		</aside>
	)
}
