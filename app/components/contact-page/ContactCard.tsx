import { type Contact } from "./contacts";

interface ContactCardProps {
  contact: Contact;
}

export function ContactCard({ contact }: ContactCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
      {/* Avatar Placeholder */}
      <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
        <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
      <h3 className="font-semibold text-lg">{contact.name}</h3>
      <p className="text-sm text-gray-600">{contact.role}</p>
      <p className="text-sm text-gray-600">{contact.organization}</p>
      
      <a href={`mailto:${contact.email}`} className="text-sm text-blue-600 hover:underline">
        {contact.email}
      </a>
      {contact.linkedin && (
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
          LinkedIn
        </a>
      )}
    </div>
  );
}