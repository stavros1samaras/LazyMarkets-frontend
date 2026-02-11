import { Outlet } from "react-router"
import TechnicalNavigation from "../../routes/Technical/TechnicalNavigation"
import DesktopEventSidebar from "../../components/DesktopEventSidebar"

export default function TechnicalLayout() {
	return (
		<div className="flex w-full h-full">
			<DesktopEventSidebar type="allTickers" />
			<div className="flex flex-col w-3/2">
				<TechnicalNavigation />
				<Outlet />
			</div>
		</div>
	)
}
