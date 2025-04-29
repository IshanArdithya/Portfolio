"use client";

import { useTheme } from "@/context/ThemeContext";
import Hero from "./components/home/Hero";
import Header from "./components/common/Header";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`relative min-h-screen flex flex-col items-center justify-between px-6 pt-20 pb-10 overflow-hidden ${theme.background} ${theme.text}`}
      >
        <Header />
        <Hero />
      </div>
    </>
  );
}
