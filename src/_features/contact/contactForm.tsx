import contactForm from "@/_features/contact/_actions/contactForm"
import { Span } from "@/components/elements/Span"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { FieldGroup, FieldSet, FieldLegend, Field, FieldLabel, FieldDescription } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupTextarea, InputGroupAddon, InputGroupText } from "@/components/ui/input-group"

import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from "sonner"

export type FormInputs = {
	name: string
	email: string
	message: string
}

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormInputs>()

	const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
		toast.promise<{ name: string }>(async () => await contactForm(data), {
			loading: "submitting form...",
			success: (data) => `${data.name} thanks for submitting this form!`,
			error: "Error",
		})
		reset()
	}

	return (
		<Card className="w-full h-fit py-4">
			<CardHeader>
				<CardTitle>Contact Us</CardTitle>
				<CardDescription>Have a question or need help? Send us a message and we will get back to you.</CardDescription>
			</CardHeader>
			<CardContent>
				<form id="form-rhf-demo" onSubmit={handleSubmit(onSubmit)} noValidate>
					<FieldGroup>
						<FieldSet>
							<FieldLegend>Contact Information</FieldLegend>
							<FieldGroup>
								<Field>
									<FieldLabel htmlFor="">Name</FieldLabel>
									<Input
										id="form-rhf-demo-title"
										type="text"
										placeholder="Your name"
										autoComplete="off"
										{...register("name", {
											required: "This field is required",
											minLength: {
												value: 3,
												message: "Name must be at least 3 characters",
											},
											maxLength: {
												value: 20,
												message: "Name must be at most 20 characters",
											},
										})}
									/>
									{errors.name && <Span className="text-destructive text-sm">{errors.name.message}</Span>}
									<FieldDescription>Enter your full name so we know who we are speaking with.</FieldDescription>
								</Field>
								<Field>
									<FieldLabel htmlFor="">Email</FieldLabel>
									<Input
										id="form-rhf-demo-title"
										placeholder="you@example.com"
										autoComplete="off"
										type="email"
										{...register("email", {
											required: "Email is required",
											minLength: {
												value: 3,
												message: "Name must be at least 3 characters",
											},
											pattern: {
												value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
												message: "Invalid email",
											},
										})}
									/>
									{errors.email && <Span className="text-destructive text-sm">{errors.email.message}</Span>}
									<FieldDescription>We will use this email to get back to you.</FieldDescription>
								</Field>
								<Field>
									<FieldLabel htmlFor="">Message</FieldLabel>
									<InputGroup>
										<InputGroupTextarea
											id="form-rhf-demo-description"
											placeholder="Write your message here..."
											rows={6}
											className="min-h-24 resize-none"
											{...register("message", { required: true })}
										/>
										<InputGroupAddon align="block-end">
											<InputGroupText className="tabular-nums">0/500 characters</InputGroupText>
										</InputGroupAddon>
									</InputGroup>
									<FieldDescription>Please provide as much detail as possible so we can better assist you.</FieldDescription>
								</Field>
							</FieldGroup>
						</FieldSet>
					</FieldGroup>
				</form>
			</CardContent>
			<CardFooter>
				<Field orientation="horizontal">
					<Button type="button" variant="outline" onClick={() => reset()}>
						Reset
					</Button>
					<Button type="submit" form="form-rhf-demo">
						Submit
					</Button>
				</Field>
			</CardFooter>
		</Card>
	)
}
