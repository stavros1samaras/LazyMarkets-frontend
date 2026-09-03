import Text from "@/components/elements/Text"
import { Div } from "@/components/elements/Div"
import ChartDisplayToggleButton from "./components/ChartDisplayToggleButton"
import DownloadButton from "./components/DownloadButton"
import SectionCard from "@/components/elements/SectionCard"

export default function Controls() {
	return (
		<SectionCard>
			<Div className="justify-between">
				<Text as="h2">Controls</Text>
				<Div>
					<ChartDisplayToggleButton className="w-8 h-8" />
					<DownloadButton className="h-8" />
				</Div>
			</Div>
		</SectionCard>
	)
}
