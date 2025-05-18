"use client";

import { useEffect, useState } from "react";
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
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navItems = navBar.map((item) => ({
    name: item.text,
    link: item.href,
    active:
      activeSection ===
      (item.href === "/" ? "home" : item.href.replace("#", "")),
  }));

  const handleNavItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // offset for navbar height
          behavior: "smooth",
        });
        setActiveSection(targetId);

        if (isMenuOpen) {
          toggleMenu();
        }
      }
    } else if (href === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setActiveSection("home");

      if (isMenuOpen) {
        toggleMenu();
      }
    } else {
      window.location.href = href;
    }
  };

  // to detect the section in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -20% 0px",
      threshold: 0.2,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll("div[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <Navbar className="fixed top-0 md:top-3 left-0 w-full text-lg font-semibold p-4 z-10 transition-all">
      <NavBody className="min-h-[70px] py-4">
        {/* <NavbarLogo /> */}
        <NavItems items={navItems} onItemClick={handleNavItemClick} />
        {/* <div className="relative z-20 flex items-center justify-end gap-2">
          <NavbarButton variant="secondary">Sign In</NavbarButton>
        </div> */}
      </NavBody>

      <MobileNav>
        <MobileNavHeader className="min-h-[30px] py-2 px-1">
          <NavbarLogo name={profile.name} />
          <MobileNavToggle isOpen={isMenuOpen} onClick={toggleMenu} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMenuOpen} onClose={toggleMenu}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`w-full px-4 py-2 text-lg font-medium ${
                item.active ? theme.textAccent : theme.text
              } ${theme.hoverText}`}
              onClick={(e) => handleNavItemClick(e, item.link)}
            >
              {item.name}
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
