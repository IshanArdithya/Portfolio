"use client";

import { useTheme } from "@/context/ThemeContext";
import Hero from "@/components/home/Hero";
import Header from "@/components/common/Header";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import Personal from "@/components/home/Personal";
import Contact from "@/components/home/Contact";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <div className={`${theme.background} ${theme.text}`}>
        <Header />
        <div id="home">
          <Hero />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="personal">
          <Personal />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}
