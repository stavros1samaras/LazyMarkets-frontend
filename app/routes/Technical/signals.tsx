// import type { Route } from "./Components/+types/signals";

import type { Route } from "../Techical/+types/signals"
import BitSignals from "./signals/bitSignals"

export async function loader() {
	const url: string = `http://127.0.0.1:8000/ta/data/prices?ticker=BTC-USD&start=2023-12-06&end=2025-09-12&interval=1d`

	const response: Response = await fetch(url)
	const result = await response.json()
	const areaChart: any = result["BTC-USD"]

	const pair1Url = "http://127.0.0.1:8000/ta/strategies/pair1"

	const pair1Response: Response = await fetch(pair1Url)
	const pair1 = await pair1Response.json()

	const pair2Url = "http://127.0.0.1:8000/ta/strategies/pair2"

	const pair2Response: Response = await fetch(pair2Url)
	const pair2 = await pair2Response.json()

	return { areaChart, pair1, pair2 }
}

export default function Signals({ loaderData }: Route.ComponentProps) {
	return (
		<div>
			<BitSignals
				areaData={loaderData.areaChart}
				ticketPair1={loaderData.pair1}
				ticketPair2={loaderData.pair2}
			/>
		</div>
	)
}
