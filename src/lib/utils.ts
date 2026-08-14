import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const twMerge = extendTailwindMerge({
	extend: {
		classGroups: {
			"font-size": ["text-responsive-h1", "text-responsive-h2", "text-responsive-h3", "text-responsive-h4", "text-responsive-p"],
		},
	},
})

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
