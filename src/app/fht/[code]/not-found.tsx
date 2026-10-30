import { Div } from "@/components/elements/Div"
import Main from "@/components/elements/Main"
import { Metadata } from "next"
import Text from "@/components/elements/Text"
import { ServerOff } from "lucide-react"

export const metadata: Metadata = {
	title: "Not Found",
	description: "The page you are looking for does not exist.",
}

export default function NotFound() {
	return (
		<Main className="flex flex-col items-center justify-center flex-1 mb-2 border border-ring">
			<section className="m-10">
				<Div>
					<Text as="h2">Not found</Text>
					<ServerOff size={30} className="text-foreground" />
				</Div>
				<Text className="max-w-120">
					It looks like you may have accidentally navigated to a resource that doesn&apos;t exist. To get back on track, simply
					click any link in the navigation menu to continue exploring.
				</Text>
				<Text></Text>
			</section>
		</Main>
	)
}
