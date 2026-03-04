export interface Contact {
  name: string;
  role: string;
  phone?: string;
  email: string;
  organization: string;
}

export const contactList: Contact[] = [
  {
    name: "Victoria Castagnola",
    role: "Project Manager",
    phone: "540-554-1155",
    email: "castagnola.victoria@gmail.com",
    organization: "Virginia Commonwealth University",
  },
  {
    name: "Jin Lee",
    role: "Back-End Developer",
    email: "jin.placeholder@example.com",
    organization: "Virginia Commonwealth University",
  },
  {
    name: "Steven Zheng",
    role: "Developer",
    email: "placeholder@example.com",
    organization: "Dev Team",
  },
  {
    name: "Angela Pantigozo-Cuellar",
    role: "QA Tester",
    email: "placeholder@example.com",
    organization: "Quality Team",
  },
  {
    name: "Jeremiah Robert",
    role: "Product Owner",
    email: "placeholder@example.com",
    organization: "Product Team",
  },
  {
    name: "Justin Jones",
    role: "Full-Stack Mentor",
    email: "jjones@costar.com",
    organization: "CoStar Group",
  },
  {
    name: "Abigail Marlett",
    role: "Full-Stack Mentor",
    email: "amarlett@costar.com",
    organization: "CoStar Group",
  }
];