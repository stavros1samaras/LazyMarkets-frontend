import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const twMerge = extendTailwindMerge({
	extend: {
		classGroups: {
			"font-size": ["responsive-h1", "responsive-h2", "responsive-h3", "responsive-h4", "responsive-p"],
		},
	},
})

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
