import contactForm from "@/_features/contact/_actions/contactForm"
import { config } from "@/_features/contact/contact-form/config"
import { FormInputs } from "@/_features/contact/contact-form/types"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { FieldGroup, FieldSet, FieldLegend, Field } from "@/components/ui/field"
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import { toast } from "sonner"

export default function ContactForm() {
	const methods = useForm<FormInputs>()

	const { handleSubmit, reset } = methods

	const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
		toast.promise<{ name: string }>(async () => await contactForm(data), {
			loading: "submitting form...",
			success: (data) => {
				reset()
				return `${data.name} thanks for submitting this form!`
			},
			error: "Error",
		})
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
								<FormProvider {...methods}>
									{config.map((inputInfo, index) => {
										return (
											<inputInfo.component
												key={index}
												id={inputInfo.id}
												type={inputInfo.type}
												DomInputName={inputInfo.DomInputName}
												label={inputInfo.label}
												placeholder={inputInfo.placeholder}
												description={inputInfo.description}
												rules={inputInfo.rules}
											/>
										)
									})}
								</FormProvider>
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
