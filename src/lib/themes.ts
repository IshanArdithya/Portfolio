export type ThemeKey = "teal";

export interface Theme {
  background: string;
  accent: string;
  text: string;
  textTwo: string;
  textAccent: string;
  border: string;
  borderAccent: string;
  hoverText: string;
  hoverTextAccentTwo: string;
  hoverButtonAccent: string;
}

export const themes: Record<ThemeKey, Theme> = {
  teal: {
    background: "bg-[rgb(28,28,34)]/100",
    accent: "bg-indigo-500",
    text: "text-white",
    textTwo: "text-white/80",
    textAccent: "text-indigo-500",
    border: "border-white",
    borderAccent: "border-indigo-500",
    hoverText: "hover:text-indigo-400",
    hoverTextAccentTwo: "hover:text-[rgb(28,28,34)]",
    hoverButtonAccent: "hover:bg-indigo-500",
  },
};
