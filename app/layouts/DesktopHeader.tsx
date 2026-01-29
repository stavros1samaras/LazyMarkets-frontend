import { Link } from "react-router";
import MainNavigationMenu from '../components/NavigationMenu';
import Text from "~/components/Text";
import LivePrices from "./LivePrices";


export default function DesktopHeader() {
    return (
        <>
            <MainNavigationMenu >
                <Text>SAMOKO</Text>
                <Link to="/se/technical/overview/BTC-USD">
                    <Text>Techical</Text>
                </Link>
                <Link to="/se/fundamental/single-analysis/overview/AAPL">
                    <Text>Fundamental</Text>
                </Link>
                <Link to="/se/sentiment">
                    <Text>Sentiment</Text>
                </Link>
                <Link to="/se/contact">
                    <Text>Contact</Text>
                </Link>
                <Link to="/se/financial-history-timeline/TrmpTrrffShck">
                    <Text>FHT</Text>
                </Link>
            </MainNavigationMenu>
            {/* <LivePrices /> */}
        </>
    );
}

