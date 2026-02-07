import { useState } from "react";
import { Form, redirect } from "react-router";
import type { Route } from "../+types";
// import type { Route } from "./bigComponents/+types/contactLayout";

export async function action({ request }: Route.ClientActionArgs) {

    let formData = await request.formData();
    let name = formData.get("name");
    let email = formData.get("email");

    let errorsArray: string[] = [];

    if (!email?.toString().includes("_")) {
        errorsArray.push("Invalid email address");
        return errorsArray;
    }

    try {
        const response = await fetch("https://formspree.io/f/xovnojjj", {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: formData,
        });
        if (response.ok) {
            console.log(formData)
        }
    } catch (error) {
        console.error(error);
    }

    return redirect("/");
    // return JSON.stringify(formData.get("email"))
}

export default function ContactLayout({ actionData }: Route.ComponentProps) {
    return (<>
        <h2>Contact us</h2>
        <Form method="post">
            <fieldset>
                <label htmlFor="">Enter your name</label>
                <input type="text" name="name" />
            </fieldset>
            <fieldset>
                <label htmlFor="">Enter your email</label>
                <input type="email" name="email" />
            </fieldset>
            <fieldset>
                <label htmlFor="">Enter your message</label>
                <textarea name="text" >
                </textarea>
            </fieldset>
            {actionData && (
                <p style={{ color: "red" }}>{actionData[0]}</p>
            )}
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
        </Form>
    </>)
}