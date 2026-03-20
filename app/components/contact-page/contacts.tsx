export interface Contact {
  name: string;
  role: string;
  organization: string;
  linkedin?: string;
  phone?: string;
  email: string;
}

export const contactList: Contact[] = [
  {
    name: "Victoria Castagnola",
    role: "Project Manager & Front-End Developer",
    organization: "Virginia Commonwealth University",
    linkedin: "https://www.linkedin.com/in/victoria-castagnola-vcu/",
    phone: "540-554-1155",
    email: "castagnola.victoria@gmail.com",
  },
  {
    name: "Jin Lee",
    role: "Back-End Developer",
    organization: "Virginia Commonwealth University",
    linkedin: "https://www.linkedin.com/in/jin-lee-03m0805/",
    email: "leej116@vcu.edu",
    
  },
  {
    name: "Steven Zheng",
    role: "Full-Stack Developer",
    organization: "Virginia Commonwealth University",
    linkedin: "https://www.linkedin.com/in/zheng-steven/",
    phone: "540-554-1157",
    email: "steven.zheng7@icloud.com ",
  },
  {
    name: "Angela Pantigozo-Cuellar",
    role: "Front-End Developer",
    organization: "Virginia Commonwealth University",
    linkedin: "https://www.linkedin.com/in/angela-pantigozo-cuellar/",
    email: "pantigozocam@vcu.edu",
  },
  {
    name: "Jeremiah Robert",
    role: "Back-End Developer",
    organization: "Virginia Commonwealth University",
    linkedin: "https://www.linkedin.com/in/jeremiah-robert/",
    email: "jeremiadrjohn@gmail.com",
  },
  {
    name: "Justin Jones",
    role: "Full-Stack Mentor",
    organization: "CoStar Group",
    linkedin: "https://www.linkedin.com/in/jonesjt23/",
    email: "jjones@costar.com",
  },
  {
    name: "Abigail Marlett",
    role: "Full-Stack Mentor",
    organization: "CoStar Group",
    linkedin: "https://www.linkedin.com/in/abigail-marlett/",
    email: "amarlett@costar.com",
  }
];