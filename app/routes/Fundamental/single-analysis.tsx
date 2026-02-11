import { Outlet, useParams } from "react-router"
import NavigationMenu from "./single-analysis/NavigationMenu"
import DesktopEventSidebar from "~/components/DesktopEventSidebar"

export default function SingleAnalysis() {
	const params = useParams()
	return (
		<div className="flex w-full h-full">
			<DesktopEventSidebar type="stocks" />
			<div className="flex flex-col w-3/2">
				<NavigationMenu />
				<Outlet />
			</div>
		</div>
	)
}
