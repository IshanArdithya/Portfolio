"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <Hero />
      </ThemeProvider>
    </>
  );
}
