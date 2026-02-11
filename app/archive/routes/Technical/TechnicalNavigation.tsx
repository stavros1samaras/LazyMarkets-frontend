import { Link } from "react-router"
import SubNavigationMenu from "~/archive/components/SubNavigationMenu"
import Text from "~/components/Text"

export default function TechnicalNavigation() {
	return (
		<SubNavigationMenu>
			<Link to={`/se/technical/overview/${"BTC-USD"}`}>
				<Text>overview</Text>
			</Link>
			<Link to="/se/technical/signals">
				<Text>Signals</Text>
			</Link>
			<Link to="/">
				<Text>item3</Text>
			</Link>
		</SubNavigationMenu>
	)
}
