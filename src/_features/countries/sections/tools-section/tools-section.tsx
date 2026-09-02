import { Card, CardContent } from "@/components/ui/card"
import Text from "@/components/elements/Text"
import { Div } from "@/components/elements/Div"
import SettingsButton from "./components/SettingsButton"
import DownloadButton from "./components/DownloadButton"

export default function ToolsSection() {
	return (
		<Card>
			<CardContent className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center sm:justify-between p-4 sm:p-6">
				<Div className="flex-col items-start w-full">
					<Text as="h2" className="text-2xl sm:text-3xl tracking-tight">
						Tools
					</Text>
				</Div>
				<Div className="w-full sm:w-auto">
					<SettingsButton className="order-2 lg:order-1 h-8 w-8" />
					<DownloadButton className="flex-1 sm:flex-none order-1 lg:order-2" />
				</Div>
			</CardContent>
		</Card>
	)
}
