import { overviewModule } from "~/modules/.server/fundamental"
import type { Route } from "./+types/overview"
import { useParams, data as res } from "react-router"
import type { PricePoints } from "~/types/types"
import PriceChart from "~/components/legacy/PriceChart"

export type FundamentalOverviewData = {
	pricePoints?: PricePoints[]
	quote?: any
	insights?: any
	recommendations?: any
}

export async function loader({ params, request }: Route.LoaderArgs) {
	const data: FundamentalOverviewData = await overviewModule(params, request)
	return res(data)
}

export default function Overview({ loaderData }: Route.ComponentProps) {
	let symbol = useParams()

	return (
		<>
			<PriceChart key={symbol.symbol} chartData={loaderData.pricePoints} />
			<h2>quote</h2>
			<br></br>
			{JSON.stringify(loaderData.quote)}
			<h2>insights</h2>
			<br></br>
			{JSON.stringify(loaderData.insights)}
			<h2>recommendations</h2>
			<br></br>
			{JSON.stringify(loaderData.recommendations)}
		</>
	)
}
