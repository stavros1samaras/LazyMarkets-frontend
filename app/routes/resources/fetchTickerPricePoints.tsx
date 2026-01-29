import type { Ticker } from "~/types/tickers";
// import { createTicker } from "../../utilities/.server/tickers";
import { BASE_URL } from "~/constants";
import type { Route } from "./+types/fetchTickerPricePoints";

import { fetchTickerPricePoints } from '~/utilities/.server/tickers';


export async function loader({ params, request }: Route.LoaderArgs) {

    const url = new URL(request.url);
    const ticker: Ticker = {
        symbol: params.ticker,
        startDate: url.searchParams.get("start") as string,
        endDate: url.searchParams.get("end") as string,
        interval: url.searchParams.get("interval") as string
    };
    const data = await fetchTickerPricePoints(ticker);

    return Response.json(data);
}


