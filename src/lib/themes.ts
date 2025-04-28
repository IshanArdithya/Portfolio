export type ThemeKey = "teal";

export interface Theme {
  background: string;
  accent: string;
  text: string;
  textTwo: string;
  border: string;
  hoverText: string;
}

export const themes: Record<ThemeKey, Theme> = {
  teal: {
    background: "bg-[rgb(28,28,34)]/100",
    accent: "bg-indigo-500",
    text: "text-white",
    textTwo: "text-white/80",
    border: "border-white",
    hoverText: "hover:text-indigo-400",
  },
};
