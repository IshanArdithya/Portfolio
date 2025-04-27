export type Profile = {
  name: string;
  role: string;
  description: string;
};

export type Tags = string[];

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
