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
