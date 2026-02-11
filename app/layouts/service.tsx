import { Outlet } from "react-router"
import DesktopHeader from "../components/DesktopHeader"

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
