import { InputFieldProps, FormInputs } from "@/_features/contact/sections/contact-form/types"
import { Span } from "@/components/elements/Span"
import Text from "@/components/elements/Text"
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupTextarea, InputGroupAddon, InputGroupText } from "@/components/ui/input-group"
import { useFormContext } from "react-hook-form"

export function InputField({ id, type, DomInputName, label, placeholder, description, rules }: InputFieldProps) {
	const {
		register,
		formState: { errors },
	} = useFormContext<FormInputs>()

	return (
		<Field>
			<FieldLabel htmlFor={id}>
				<Text as="span">{label}</Text>
			</FieldLabel>
			<Input id={id} type={type} placeholder={placeholder} autoComplete="off" {...register(DomInputName, { ...rules })} />
			{errors[DomInputName] ? (
				<Span className="text-sm text-destructive">
					<Text as="span" className="text-destructive">
						{errors[DomInputName]?.message}
					</Text>
				</Span>
			) : (
				<FieldDescription>
					<Text as="span">{description}</Text>
				</FieldDescription>
			)}
		</Field>
	)
}

export function TextareaField({ id, DomInputName, label, placeholder, description, rules }: InputFieldProps) {
	const {
		register,
		formState: { errors },
	} = useFormContext<FormInputs>()

	return (
		<Field>
			<FieldLabel htmlFor={id}>
				<Text as="span">{label}</Text>
			</FieldLabel>

			<InputGroup>
				<InputGroupTextarea
					id={id}
					placeholder={placeholder}
					rows={6}
					className="min-h-24 resize-none"
					{...register(DomInputName, rules)}
				/>

				<InputGroupAddon align="block-end">
					<InputGroupText className="tabular-nums">
						<Text as="span">0/500 characters</Text>
					</InputGroupText>
				</InputGroupAddon>
			</InputGroup>

			{errors[DomInputName] ? (
				<Span className="text-sm text-destructive">
					<Text as="span" className="text-destructive">
						{errors[DomInputName]?.message}
					</Text>
				</Span>
			) : (
				<FieldDescription>
					<Text as="span">{description}</Text>
				</FieldDescription>
			)}
		</Field>
	)
}
