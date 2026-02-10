import { type RouteConfig, route, index, layout, prefix } from "@react-router/dev/routes"
export default [
	index("./routes/index.tsx"),
	route("se", "./layouts/service.tsx", [
		...(import.meta.env.DEV
			? [
					...prefix("technical", [
						layout("./layouts/technical.tsx", [
							route("overview/:symbol", "./routes/Technical/overview.tsx"),
							route("signals", "./routes/Technical/signals.tsx"),
						]),
					]),
					...prefix("fundamental", [
						layout("./layouts/fundamental.tsx", [
							route("single-analysis", "./routes/Fundamental/single-analysis.tsx", [
								route("overview/:symbol", "./routes/Fundamental/single-analysis/overview.tsx"),
								route("financials/:symbol", "./routes/Fundamental/single-analysis/financials.tsx"),
							]),
							route("auto-analysis", "./routes/Fundamental/auto-analysis.tsx"),
						]),
					]),
					...prefix("sentiment", [
						layout("./layouts/sentiment.tsx", [
							index("./routes/Sentiment/Components/SentimentNavigation.tsx"),
						]),
					]),
					...prefix("contact", [
						layout("./layouts/contact.tsx", [index("./routes/Contact/contact.tsx")]),
					]),
				]
			: []),
		route("financial-history-timeline/:eventCode", "./layouts/FHT.tsx", []),
	]),
] satisfies RouteConfig
