import ChartContainer from "../../../_features/countries/sections/chart-container/chart-container"
import Controls from "@/_features/countries/sections/controls/controls"

export default async function Countries({ params }: { params: Promise<{ code: string }> }) {
	const countryCode = (await params).code
	// IGNORE: should start here the fetch and inside ChartContainer i should await
	return (
		<>
			<Controls />
			<ChartContainer countryCode={countryCode} />
		</>
	)
}
