import ChartContainer from "../../../_features/countries/sections/chart-container/chart-container"

export default async function Countries({ params }: { params: Promise<{ code: string }> }) {
	const countryCode = (await params).code

	return <ChartContainer countryCode={countryCode} />
}
