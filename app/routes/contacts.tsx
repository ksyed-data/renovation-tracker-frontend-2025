import type { Route } from "./+types/home";
import { ContactPage } from "~/components/layouts/ContactPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Page" },
    {
      name: "Contacts",
      content: "Contacts of everyone who worked on this project.",
    },
  ];
}

export default function Contacts() {
  return <ContactPage />;
}
