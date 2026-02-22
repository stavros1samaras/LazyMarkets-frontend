import { redirect } from "next/navigation";

export default function Home({ children }: { children: React.ReactNode }) {
  redirect("/se");
}
