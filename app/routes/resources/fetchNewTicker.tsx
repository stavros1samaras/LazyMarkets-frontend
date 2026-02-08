import { redirect } from "react-router"
import type { Route } from "./+types/fetchNewTicker"

export async function loader({ params }: Route.LoaderArgs) {
	const from = decodeURIComponent(params.from!)
	const ticker = params.ticker

	return redirect(`${from}/${ticker}`)
}
