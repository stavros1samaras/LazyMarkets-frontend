import { Link } from "react-router";
import MainNavigationMenu from '../components/NavigationMenu';
import Text from "~/components/Text";
import LivePrices from "./LivePrices";


export default function DesktopHeader() {
    return (
        <>
            <MainNavigationMenu >
                <Text>SAMOKO</Text>
                <Link
                    to={
                        import.meta.env.PROD
                            ? "/se/financial-history-timeline/TrmpTrrffShck"
                            : "/se/technical/overview/BTC-USD"
                    }
                >
                    <Text>Techical</Text>
                </Link>
                <Link
                    to={
                        import.meta.env.PROD
                            ? "/se/financial-history-timeline/TrmpTrrffShck"
                            : "/se/fundamental/single-analysis/overview/AAPL"
                    }
                >
                    <Text>Fundamental</Text>
                </Link>
                <Link className="hidden sm:block"
                    to={
                        import.meta.env.PROD
                            ? "/se/financial-history-timeline/TrmpTrrffShck"
                            : "/se/sentiment"
                    }
                >
                    <Text>Sentiment</Text>
                </Link>
                <Link to="/se/financial-history-timeline/TrmpTrrffShck">
                    <Text>FHT</Text>
                </Link>
                <Link className="hidden sm:block"
                    to={
                        import.meta.env.PROD
                            ? "/se/financial-history-timeline/TrmpTrrffShck"
                            : "/se/contact"
                    }
                >
                    <Text>Contact</Text>
                </Link>
            </MainNavigationMenu>
            {/* <LivePrices /> */}
        </>
    );
}

