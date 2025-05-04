import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

export type NavBar = {
  text: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  description: string;
  image: string;
};

export type Tags = string[];

export type Statistic = {
  value: number;
  label: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: React.ElementType;
};

export type Experience = {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  companylogo: string;
  description: string;
  links?: {
    url: string;
    type: "linkedin" | "website";
  }[];
  tech?: string[];
};

export type TechIcons = {
  [key: string]: {
    image: string;
    name: string;
    description: string;
  };
};

export type Project = {
  name: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  url?: string;
};

export const navBar: NavBar[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Experience",
    href: "#experience",
  },
  {
    text: "Projects",
    href: "#projects",
  },
  {
    text: "Personal",
    href: "#personal",
  },
  {
    text: "Contact",
    href: "#contact",
  },
];

export const profile: Profile = {
  name: "Ishan Ardithya",
  role: "Software Engineer",
  description:
    "I am a full-stack developer specializing in modern front-end frameworks like React and Next.js, and back-end technologies such as Node.js, Express.js, MongoDB, and MySQL.",
  image: "https://radnaabazar.vercel.app/assets/mascot.gif",
};

export const tags: Tags = [
  "React",
  "Next.js",
  "Express.js",
  "Node.js",
  "TailwindCSS",
  "PHP",
];

export const statistics: Statistic[] = [
  {
    value: 23,
    label: "Age",
  },
  {
    value: 3,
    label: "Years of experience",
  },
  {
    value: 10,
    label: "Projects worked on",
  },
  {
    value: 5,
    label: "Projects collaborated",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ishan-ardithya",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/IshanArdithya",
    icon: FaGithub,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/ishan.ardithya/",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ishan_ardithya/",
    icon: FaInstagram,
  },
  {
    name: "Instagram",
    url: "https://discord.com",
    icon: FaDiscord,
  },
];

export const experiences: Experience[] = [
  {
    startDate: "2025 March",
    endDate: "Present",
    title: "Software Engineer Intern",
    company: "Enored",
    companylogo: "https://i.imgur.com/ssfQKfJ.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Perspiciatis reprehenderit maxime distinctio assumenda optionemo repudiandae nulla esse tempore, quibusdam aspernatur quas aliquid molestias aut repellendus libero voluptatibus non consequatur sapiente delectus vero eveniet quod. Similique non, ratione quam doloremque voluptas magni praesentium ad aspernatur? Sit rerum, sapiente dolore ducimus, reiciendis, quia eaque tempora exercitationem molestias voluptas tempore accusamus maxime.",
    links: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/company/enoredglobal/",
      },
    ],
    tech: ["React.js", "Next.js", "Express.js", "Node.js", "TailwindCSS"],
  },
];

export const techIcons: TechIcons = {
  html: {
    image: "/icons/html.svg",
    name: "HTML",
    description:
      "The standard markup language for documents designed to be displayed in a web browser.",
  },
  next: {
    image: "/icons/nextjs.webp",
    name: "Next.js",
    description:
      "A React framework for building server-side rendered applications with ease.",
  },
  react: {
    image: "/icons/react.svg",
    name: "React",
    description:
      "A JavaScript library for building user interfaces, primarily for single-page applications.",
  },
  javascript: {
    image: "/icons/javascript.svg",
    name: "JavaScript",
    description:
      "A programming language that is commonly used in web development to create dynamic and interactive content.",
  },
  typescript: {
    image: "/icons/typescript.svg",
    name: "TypeScript",
    description:
      "A superset of JavaScript that adds static typing and object-oriented features to the language.",
  },
  css: {
    image: "/icons/css.svg",
    name: "CSS",
    description:
      "A style sheet language used for describing the presentation of a document written in HTML or XML.",
  },
  tailwind: {
    image: "/icons/tailwind.svg",
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom designs without leaving HTML.",
  },
  shadcn: {
    image: "/icons/shadcn.svg",
    name: "ShadCN UI",
    description:
      "A modern component library for building high-quality, customizable UI components.",
  },
  node: {
    image: "/icons/nodejs.svg",
    name: "Node.js",
    description:
      "A JavaScript runtime built on Chrome's V8 JavaScript engine for building fast, scalable network applications.",
  },
  express: {
    image: "/icons/expressjs.svg",
    name: "Express.js",
    description:
      "A minimal and flexible Node.js web application framework for building RESTful APIs and web applications.",
  },
  java: {
    image: "/icons/java.svg",
    name: "Java",
    description:
      "A high-level programming language used for building a wide range of applications, including web, mobile, and desktop.",
  },
  php: {
    image: "/icons/php.svg",
    name: "PHP",
    description:
      "A widely-used open-source scripting language primarily used for server-side web development.",
  },
  mysql: {
    image: "/icons/mysql.svg",
    name: "MySQL",
    description:
      "An open-source relational database management system used for managing data in web applications.",
  },
  mongodb: {
    image: "/icons/mongodb.svg",
    name: "MongoDB",
    description:
      "A NoSQL database that provides high performance, scalability, and ease of development.",
  },
  firebase: {
    image: "/icons/firebase.svg",
    name: "Firebase",
    description:
      "A platform developed by Google for creating mobile and web applications with a set of tools and services.",
  },
};

export const projects: Project[] = [
  {
    name: "NextuneLK",
    category: "marketing",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, tempora doloribus ab saepe illo quae repellendus omnis cum placeat cupiditate tenetur dolorem a quia fuga voluptate unde animi molestias incidunt sunt, dolore reiciendis nulla qui. Neque aperiam voluptatem nesciunt. Hic eveniet inventore illo maxime at quam laboriosam est quasi ducimus.",
    image: "/images/projects/NextuneLK.png?height=300&width=400",
    technologies: ["next", "tailwind", "express", "typescript"],
    githubUrl: "https://github.com/IshanArdithya/NextuneLK",
    url: "https://www.nextunelk.com/",
  },
  {
    name: "Mega City Cab",
    category: "transport",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, tempora doloribus ab saepe illo quae repellendus omnis cum placeat cupiditate tenetur dolorem a quia fuga voluptate unde animi molestias incidunt sunt, dolore reiciendis nulla qui. Neque aperiam voluptatem nesciunt. Hic eveniet inventore illo maxime at quam laboriosam est quasi ducimus.",
    image: "",
    technologies: ["html", "css", "javascript", "java", "mysql"],
    githubUrl: "https://github.com/IshanArdithya/MegaCityCab",
  },
  {
    name: "MY ADMIN",
    category: "administration",
    description:
      "tempora doloribus ab saepe illo quae repellendus omnis cum placeat cupiditate tenetur dolorem a quia fuga voluptate unde animi.",
    image: "",
    technologies: ["next", "firebase"],
  },
  {
    name: "Test",
    category: "construction",
    description:
      "tempora doloribus ab saepe illo quae repellendus omnis cum placeat cupiditate tenetur dolorem a quia fuga voluptate unde animi molestias incidunt sunt, dolore reiciendis nulla qui.",
    image: "",
    technologies: ["html", "css", "tailwind"],
    url: "#",
  },
  {
    name: "TS",
    category: "insurance",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, tempora doloribus ab saepe illo quae repellendus omnis cum placeat cupiditate tenetur dolorem a quia fuga voluptate unde animi molestias incidunt sunt, dolore reiciendis nulla qui. Neque aperiam voluptatem nesciunt. Hic eveniet inventore illo maxime at quam laboriosam est quasi ducimus.",
    image: "",
    technologies: ["next", "firebase"],
  },
  {
    name: "WebForge",
    category: "marketing",
    description:
      "tempora doloribus ab saepe illo quae repellendus omnis cum placeat cupiditate tenetur dolorem a quia fuga voluptate unde animi molestias incidunt sunt.",
    image: "/images/projects/gg.png?height=300&width=400",
    technologies: ["next", "react", "tailwind"],
    githubUrl: "https://github.com/",
  },
];
