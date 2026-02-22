"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { ThemeKey, themes } from "@/lib/themes";

type ThemeContextType = {
  themeKey: ThemeKey;
  theme: (typeof themes)[ThemeKey];
  setTheme: (theme: ThemeKey) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeKey, setThemeKey] = useState<ThemeKey>("indigo");
  const theme = themes[themeKey];

  useEffect(() => {
    document.documentElement.style.setProperty("--scrollbar-thumb", theme.scrollbarThumb);
    document.documentElement.style.setProperty("--scrollbar-thumb-hover", theme.scrollbarHover);
    document.documentElement.style.setProperty("--scrollbar-track", theme.scrollbarTrack);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ themeKey, theme, setTheme: setThemeKey }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
