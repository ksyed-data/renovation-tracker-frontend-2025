import { contactList } from "./contacts";
import { ContactCard } from "./ContactCard";
import { NavMenu } from "../NavMenu";

export default function ContactPage() {
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