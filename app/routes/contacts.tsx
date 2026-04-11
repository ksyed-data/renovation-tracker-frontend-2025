import type { Route } from "./+types/contacts";
import ContactPage from "../components/contact-page/ContactPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Renovation Tracker" },
    { name: "Contacts", content: "Meet our team and reach out." },
  ];
}

export default function ContactsRoute() {
  return <ContactPage />;
}