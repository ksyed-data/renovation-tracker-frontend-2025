import { type Contact } from "./contacts";
import { User } from "lucide-react";

interface ContactCardProps {
  contact: Contact;
}

export function ContactCard({ contact }: ContactCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
      {contact.photo ? (
        <img
          src={contact.photo}
          alt={`${contact.name} avatar`}
          className="w-20 h-20 rounded-full object-cover"
        />
      ) : (
        <User className="w-20 h-20 text-gray-400" />
      )}
      <h3 className="font-semibold text-lg">{contact.name}</h3>
      <p className="text-sm text-gray-600">{contact.role}</p>
      <p className="text-sm text-gray-600">{contact.organization}</p>

      <a
        href={`mailto:${contact.email}`}
        className="text-sm text-blue-600 hover:underline"
      >
        {contact.email}
      </a>
      {contact.linkedin && (
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
      )}
    </div>
  );
}
