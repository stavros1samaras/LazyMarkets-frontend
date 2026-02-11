import { Link } from "react-router"
import SubNavigationMenu from "~/archive/components/SubNavigationMenu"
import Text from "~/components/Text"

export default function NavigationMenu() {
	return (
		<SubNavigationMenu>
			<Link to={`/se/fundamental/single-analysis/overview/AAPL`}>
				<Text>Overview</Text>
			</Link>
			<Link to="/se/fundamental/single-analysis/financials/AAPL">
				<Text>Financials</Text>
			</Link>
		</SubNavigationMenu>
	)
}
