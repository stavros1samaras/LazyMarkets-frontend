import { InputField, TextareaField } from "@/_features/contact/FormFields"
import { InputConfig } from "@/_features/contact/types"

export const config: InputConfig[] = [
	{
		component: InputField,
		id: "form-rhf-demo-title",
		type: "text",
		DomInputName: "name",
		label: "Name",
		placeholder: "Your name",
		description: "Enter your full name so we know who we are speaking with.",
		rules: {
			required: "This field is required",
			minLength: {
				value: 3,
				message: "Name must be at least 3 characters",
			},
			maxLength: {
				value: 20,
				message: "Name must be at most 20 characters",
			},
		},
	},
	{
		component: InputField,
		id: "form-rhf-demo-email",
		type: "email",
		DomInputName: "email",
		label: "Email",
		placeholder: "you@example.com",
		description: "We will use this email to get back to you.",
		rules: {
			required: "Email is required",
			minLength: {
				value: 3,
				message: "Name must be at least 3 characters",
			},
			pattern: {
				value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
				message: "Invalid email",
			},
		},
	},
	{
		component: TextareaField,
		id: "form-rhf-demo-description",
		DomInputName: "message",
		label: "Message",
		placeholder: "Write your message here...",
		description: "Please provide as much detail as possible so we can better assist you.",
		rules: {
			required: "Message is required",
		},
	},
]
