import { Div } from "@/components/elements/Div"
import Main from "@/components/elements/Main"
import { Hammer } from "lucide-react"
import Text from "@/components/elements/Text"

export default function Page() {
	return (
		<Main className="flex flex-col items-center justify-center flex-1 mb-2 border border-ring">
			<Div className="items-center gap-2 text-2xl text-foreground">
				<Hammer size={25} />
				<Text>Fundamental page is under construction</Text>
			</Div>
		</Main>
	)
}
