import PriceChart from "~/archive/components/PriceChart"
import type { Route } from "./+types/overview"
import { useParams } from "react-router"
import { overviewModule } from "../../modules/.server/technical"
import { data as res } from "react-router"
import type { TechnicalOverviewData } from "~/archive/types/types"

export async function loader({ params, request }: Route.LoaderArgs) {
	const data: TechnicalOverviewData = await overviewModule(params, request)
	return res(data, { status: 200 })
}

export default function Overview({ loaderData }: Route.ComponentProps) {
	let symbol = useParams()

	return (
		<>
			<h2>Bit Price Overview</h2>
			<PriceChart key={symbol.symbol} chartData={loaderData.pricePoints} />
			{JSON.stringify(loaderData.options)}
		</>
	)
}
