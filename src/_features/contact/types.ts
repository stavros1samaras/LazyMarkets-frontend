export type FormInputs = {
	name: string
	email: string
	message: string
}

export type InputConfig = {
	component: React.ElementType
	id: string
	type?: string
	DomInputName: keyof FormInputs
	label: string
	placeholder: string
	description: string
	rules: any
}

export type InputFieldProps = {
	id: string
	type: string
	DomInputName: keyof FormInputs
	label: string
	placeholder: string
	description: string
	rules: any
}
