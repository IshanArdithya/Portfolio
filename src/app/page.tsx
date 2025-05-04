"use client";

import { useTheme } from "@/context/ThemeContext";
import Hero from "@/components/home/Hero";
import Header from "@/components/common/Header";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <div className={`${theme.background} ${theme.text}`}>
        <Header />
        <Hero />
        <Experience />
        <Projects />
      </div>
    </>
  );
}
