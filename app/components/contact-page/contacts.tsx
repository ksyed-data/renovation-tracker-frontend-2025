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
    role: "Project Manager & Front-End Developer",
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
    role: "Full-Stack Developer",
    email: "placeholder@example.com",
    organization: "Dev Team",
  },
  {
    name: "Angela Pantigozo-Cuellar",
    role: "Front-End Developer",
    email: "placeholder@example.com",
    organization: "Quality Team",
  },
  {
    name: "Jeremiah Robert",
    role: "Back-End Developer",
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