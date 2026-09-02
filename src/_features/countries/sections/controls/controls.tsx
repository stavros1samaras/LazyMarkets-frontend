import { CardContent } from "@/components/ui/card"
import Text from "@/components/elements/Text"
import { Div } from "@/components/elements/Div"
import SettingsButton from "./components/SettingsButton"
import DownloadButton from "./components/DownloadButton"
import SectionCard from "@/components/elements/SectionCard"

export default function Controls() {
	return (
		<SectionCard>
			<CardContent className="flex flex-row gap-3 sm:gap-4 sm:items-center sm:justify-between p-4 sm:p-6">
				<Div className="flex-col items-start w-full">
					<Text as="h2" className="text-2xl sm:text-3xl tracking-tight">
						Controls
					</Text>
				</Div>
				<Div className="w-full sm:w-auto">
					<SettingsButton className="h-8 w-8" />
					<DownloadButton className="sm:flex-none" />
				</Div>
			</CardContent>
		</SectionCard>
	)
}
