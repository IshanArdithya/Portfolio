import {
  Experience,
  Interests,
  NavBar,
  Profile,
  Project,
  SocialLink,
  Statistic,
  Tags,
  TechIcons,
} from "@/types";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

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
  email: "ishanardithya@gmail.com",
  role: "Software Engineer",
  description:
    "I am a full-stack developer specializing in modern front-end frameworks like React and Next.js, and back-end technologies such as Node.js, Express.js, MongoDB, and MySQL.",
  image: "/images/profile/bangboo.gif",
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
    name: "Discord",
    url: "https://discord.com/users/365863757735395328",
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
    image: "/images/projects/NextuneLK.webp?height=300&width=400",
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
    image: "",
    technologies: ["react", "tailwind"],
    githubUrl: "https://github.com/",
  },
];

export const interests: Interests[] = [
  {
    title: "Programmer",
    subtitle: "Coding my way through tech",
    semititle: "A Journey Through Languages",
    description:
      "Since 2021, I've been exploring the world of programming. Starting with C, I quickly expanded to C++, C#, Java, Python, .NET, Kotlin, JavaScript, TypeScript, Bash, and SQL. Each language taught me something new, enhancing my ability to solve problems and create efficient software.",
    span: "col-span-1 lg:col-span-2",
    image: "/images/interests/programmer.webp",
  },
  {
    title: "DevOps",
    subtitle: "Automating, scaling, and optimizing systems",
    semititle: "From a Music Bot to Scalable Systems",
    description:
      "My journey with DevOps began with a simple goal—running a music bot on a VPS. Since then, I've dived into automating workflows, optimizing deployments, and bridging the gap between development and operations. I focus on scalable solutions, continuous integration, and seamless deployments.",
    span: "col-span-1 lg:col-span-1",
    image: "/images/interests/devops.webp",
  },
  {
    title: "Web Development",
    subtitle: "Building responsive, user-friendly websites",
    semititle: "From PHP to Modern JavaScript Frameworks",
    description:
      "My web development journey started with PHP, but it quickly expanded to modern stacks. Today, I focus on Next.js projects, leveraging Express.js, Node.js, MongoDB, MySQL, Tailwind CSS, and C# to create scalable, user-friendly websites.",
    span: "col-span-1 lg:col-span-1",
    image: "/images/interests/webdev.webp",
  },
  {
    title: "Music",
    subtitle: "From classics to modern",
    semititle: "Sounds That Inspire",
    description:
      "Music has been a constant part of my life. I’ve always gravitated towards rock but enjoy exploring a wide range of genres—from iconic tracks to anime songs. Live shows and new discoveries keep my playlist fresh, fueling my creativity.",
    span: "col-span-1 lg:col-span-2",
    image: "/images/interests/music.webp",
  },
  {
    title: "Movies & Anime",
    subtitle: "Where Creativity Meets Narrative",
    semititle: "Stories That Inspire and Resonate",
    description:
      "While I may not watch movies often, anime has always been a source of inspiration. Beyond entertainment, it helps me relax, sparks creativity, and introduces me to incredible stories and perspectives. Steins;Gate remains one of my all-time favorites.",
    span: "col-span-1 lg:col-span-2",
    image: "/images/interests/moviesanime.webp",
  },
  {
    title: "Gaming",
    subtitle: "Competitive Gamer",
    semititle: "Beyond Casual Play",
    description:
      "Gaming has been a passion since childhood, and in 2022, I took it to the next level with competitive play. In 2023, I competed in my first Valorant Inter-University tournament and won flawlessly. It's about teamwork and strategy.",
    span: "col-span-1",
    image: "/images/interests/gaming.webp",
  },
];
