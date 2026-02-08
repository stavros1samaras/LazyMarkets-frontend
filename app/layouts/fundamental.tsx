import { Outlet } from "react-router"
import FundamentalNavigation from "../routes/Fundamental/Components/FundamentalNavigation"

export default function FundamentalLayout() {
	return (
		<div>
			<FundamentalNavigation />
			<Outlet />
		</div>
	)
}
