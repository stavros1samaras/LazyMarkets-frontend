import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { FieldGroup, FieldSet, FieldLegend, Field, FieldLabel, FieldDescription } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupTextarea, InputGroupAddon, InputGroupText } from "@/components/ui/input-group"

export default function ContactForm() {
	return (
		<Card className="w-full h-fit py-4">
			<CardHeader>
				<CardTitle>Contact Us</CardTitle>
				<CardDescription>Have a question or need help? Send us a message and we will get back to you.</CardDescription>
			</CardHeader>
			<CardContent>
				<form id="form-rhf-demo">
					<FieldGroup>
						<FieldSet>
							<FieldLegend>Contact Information</FieldLegend>
							<FieldGroup>
								<Field>
									<FieldLabel htmlFor="form-rhf-demo-title">Name</FieldLabel>
									<Input id="form-rhf-demo-title" placeholder="Your name" autoComplete="off" />
									<FieldDescription>Enter your full name so we know who we are speaking with.</FieldDescription>
								</Field>
								<Field>
									<FieldLabel htmlFor="form-rhf-demo-title">Email</FieldLabel>
									<Input id="form-rhf-demo-title" placeholder="you@example.com" autoComplete="off" />
									<FieldDescription>We will use this email to get back to you.</FieldDescription>
								</Field>
								<Field>
									<FieldLabel htmlFor="form-rhf-demo-description">Message</FieldLabel>
									<InputGroup>
										<InputGroupTextarea
											id="form-rhf-demo-description"
											placeholder="Write your message here..."
											rows={6}
											className="min-h-24 resize-none"
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
					<Button type="button" variant="outline">
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
