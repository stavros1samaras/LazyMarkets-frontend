import { MARKET_EVENTS, SUPPORTED_TICKERS } from "~/constants";
import SidebarEvent from "~/components/SidebarEvent";
import SideScrollArea from "~/components/SideScrollArea";
import { Separator } from "~/components/ui/separator";
import SidebarTickers from "~/components/SidebarTickers";

export default function DesktopEventSidebar({ type = "events" }: any) {

    if (type === "events") {
        return (
            <SideScrollArea>
                {MARKET_EVENTS.map((asset) => (
                    <>
                        <SidebarEvent title={asset.title} code={asset.code} />
                        <Separator />
                    </>
                ))}
            </SideScrollArea>
        );
    }
    else if (type === "allTickers") {
        return (
            <SideScrollArea>
                {SUPPORTED_TICKERS.map((asset) => {
                    return (
                        <>
                            <SidebarTickers key={asset.name} name={asset.name} symbol={asset.symbol} />
                            <Separator />
                        </>
                    )
                })}
            </SideScrollArea>
        );
    }
    else if (type === "stocks") {
        return (
            <SideScrollArea>
                {SUPPORTED_TICKERS.map((asset) => {
                    if (asset.exchange == "CRYPTO") {
                        return null
                    }
                    else {
                        return (
                            <>
                                <SidebarTickers key={asset.name} name={asset.name} symbol={asset.symbol} />
                                <Separator />
                            </>
                        )
                    }
                })}
            </SideScrollArea>
        );
    }
}
