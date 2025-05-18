"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { navBar, profile } from "@/components/home/constants";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
} from "@/components/ui/navbar";

export default function Header() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navItems = navBar.map((item) => ({
    name: item.text,
    link: item.href,
  }));

  return (
    <Navbar className="fixed top-6 left-0 w-full text-lg font-semibold p-4 z-10 transition-all">
      <NavBody className="min-h-[70px] py-4">
        {/* <NavbarLogo /> */}
        <NavItems items={navItems} />
        {/* <div className="relative z-20 flex items-center justify-end gap-2">
          <NavbarButton variant="secondary">Sign In</NavbarButton>
        </div> */}
      </NavBody>

      <MobileNav>
        <MobileNavHeader className="min-h-[30px] py-2">
          <NavbarLogo name={profile.name} />
          <MobileNavToggle isOpen={isMenuOpen} onClick={toggleMenu} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMenuOpen} onClose={toggleMenu}>
          {navBar.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`w-full px-4 py-2 text-lg font-medium ${theme.hoverText}`}
              onClick={toggleMenu}
            >
              {item.text}
            </a>
          ))}
          {/* <div className="mt-4 flex w-full flex-col gap-2">
            <NavbarButton variant="secondary" className="w-full">
              Sign In
            </NavbarButton>
          </div> */}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
