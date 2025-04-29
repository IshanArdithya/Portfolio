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

export const navBar: NavBar[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Education",
    href: "#education",
  },
  {
    text: "Projects",
    href: "#projects",
  },
  {
    text: "Experience",
    href: "#experience",
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
