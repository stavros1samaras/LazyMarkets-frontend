import { Outlet } from "react-router"
import DesktopHeader from "./DesktopHeader"

export default function Service() {
	return (
		<>
			<div className=" w-screen">
				<DesktopHeader />
				<Outlet />
			</div>
		</>
	)
}
