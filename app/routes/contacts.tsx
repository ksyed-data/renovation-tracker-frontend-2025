import { contactList } from "../components/contact-page/contacts";
import { ContactCard } from "../components/contact-page/ContactCard";
import { NavMenu } from "../components/navMenu";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contacts" },
    { name: "Contacts", content: "Meet our team and reach out." },
  ];
}

export default function Contacts() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavMenu />
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {contactList.map((contact) => (
            <ContactCard key={contact.key} contact={contact} />
          ))}
        </div>
      </div>
    </div>
  );
}
