"use server"
import { FormInputs } from "@/_features/contact/contactForm"
import delay from "@/utils/delay"

export default async function contactForm(data: FormInputs) {
	await delay(2000)
	console.log(data)
	return data
}
