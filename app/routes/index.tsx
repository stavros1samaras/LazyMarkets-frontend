import { redirect } from "react-router";
import type { Route } from "./+types";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  return redirect(`/se/technical/overview/${"BTC-USD"}`);
}
