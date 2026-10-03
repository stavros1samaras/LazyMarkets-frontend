import Image from "next/image"
import { Div } from "@/components/elements/Div"
import Text from "@/components/elements/Text"
import { Countries } from "@/_features/countries/types"

export function CountryItem({ item }: { item: Countries }) {
	const flagCode = item.code.toLowerCase()

	return (
		<Div className="gap-2 py-1.5 rounded-radius">
			<Image src={`/images/flags/${flagCode}.svg`} alt="" width={17} height={17} className="rounded-xs" />
			<Text as="span" className="max-w-40 text-[16px] font-medium text-foreground">
				{item.name}
			</Text>
		</Div>
	)
}
