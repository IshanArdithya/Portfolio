import { Theme } from "@/lib/themes";

export type NavBar = {
  text: string;
  href: string;
};

export type Profile = {
  name: string;
  email: string;
  role: string;
  description: string;
  image: string;
};

export type Tags = string[];

export type Statistic = {
  value?: number;
  label: string;
  birthYear?: number;
  birthMonth?: number;
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
  active?: boolean;
};

export type Interests = {
  title: string;
  subtitle: string;
  semititle: string;
  description: string;
  span: string;
  image: string;
};

export interface ExpandedCardProps {
  interest: Interests;
  onClose: () => void;
  cardRef: React.RefObject<HTMLDivElement | null>;
  id: string;
  theme: Theme;
}
