"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { navBar } from "@/components/home/constants";

export default function Header() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-6 left-0 w-full text-lg font-semibold p-4 z-10 transition-all ${theme.background} ${theme.text}`}
    >
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        {/* deesktop nav */}
        <nav className="hidden md:flex space-x-6 justify-between gap-15">
          {navBar.map((nav, index) => (
            <Link
              href={nav.href}
              key={index}
              className={`${theme.hoverText} transition`}
            >
              {nav.text}
            </Link>
          ))}
        </nav>

        {/* mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl">
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-opacity-90 bg-black text-white p-4 mt-4">
          <nav className="space-y-4">
            {navBar.map((nav, index) => (
              <Link
                href={nav.href}
                key={index}
                className="block hover:text-accent"
              >
                {nav.text}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
