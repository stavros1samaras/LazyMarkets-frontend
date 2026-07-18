"use client"
import { Spinner } from "../../../../components/ui/spinner"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { Div } from "@/components/elements/Div"

type SidebarItemProps = {
	code: string
	name: string
	className?: string
}

export default function SidebarItem({ code, name, className = "" }: SidebarItemProps) {
	const [loading, setLoading] = useState(false)

	const flagCode = code.toLowerCase()

	return (
		<Link
			href={`/countries/${code}`}
			className={`flex items-center w-auto ${className} transition-colors hover:bg-linear-to-r hover:from-primary/40 hover:to-transparent rounded-sm`}
			onClick={() => setLoading(true)}
		>
			<Div className=" p-0.75 rounded-radius ">
				<Image src={`/images/flags/${flagCode}.svg`} alt="" width={15} height={15} />
				<span>{name}</span>

				{loading && <Spinner className="h-4 w-4" />}
			</Div>
		</Link>
	)
}
