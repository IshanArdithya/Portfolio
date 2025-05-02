export type ThemeKey = "teal";

export interface Theme {
  background: string;
  gradient: string;
  gradientTwo: string;
  accent: string;
  text: string;
  textTwo: string;
  textAccent: string;
  border: string;
  borderTwo: string;
  borderAccent: string;
  hoverBg: string;
  hoverText: string;
  hoverTextAccentTwo: string;
  hoverButtonAccent: string;
}

export const themes: Record<ThemeKey, Theme> = {
  teal: {
    background: "bg-[rgb(28,28,34)]/100",
    gradient: "from-indigo-500/10",
    gradientTwo: "to-[rgb(28,28,34)]/10",
    accent: "bg-indigo-500",
    text: "text-white",
    textTwo: "text-white/80",
    textAccent: "text-indigo-500",
    border: "border-white",
    borderTwo: "border-white/[0.2]",
    borderAccent: "border-indigo-500",
    hoverBg: "hover:bg-indigo-500",
    hoverText: "hover:text-indigo-400",
    hoverTextAccentTwo: "hover:text-[rgb(28,28,34)]",
    hoverButtonAccent: "hover:bg-indigo-500",
  },
};
