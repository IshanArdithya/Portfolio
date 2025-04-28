import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

export type Profile = {
  name: string;
  role: string;
  description: string;
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

export const profile: Profile = {
  name: "Ishan Ardithya",
  role: "Software Engineer",
  description:
    "I am a full-stack developer specializing in modern front-end frameworks like React and Next.js, and back-end technologies such as Node.js, Express.js, MongoDB, and MySQL.",
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
    url: "https://www.linkedin.com",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com",
    icon: FaGithub,
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    name: "Instagram",
    url: "https://discord.com",
    icon: FaDiscord,
  },
];
