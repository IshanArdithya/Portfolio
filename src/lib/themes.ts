export type ThemeKey = "indigo";

export interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;

  background: string;
  backgroundAlt: string;
  backgroundAccent: string;

  text: string;
  textMuted: string;
  textAccent: string;

  border: string;
  borderMuted: string;
  borderAccent: string;

  hoverBackground: string;
  hoverBackgroundAccent: string;
  hoverText: string;
  hoverTextAccent: string;
  hoverBorder: string;

  groupHoverText: string;

  buttonBackground: string;
  buttonText: string;
  buttonHoverBackground: string;
  buttonHoverText: string;

  cardBackground: string;
  cardBorder: string;
  cardHoverBorder: string;

  exCardBackground: string;
  exCardSecondaryBackground: string;

  navBackground: string;
  navText: string;
  navTextHover: string;

  gradientFrom: string;
  gradientTo: string;
}

export const themes: Record<ThemeKey, Theme> = {
  indigo: {
    // base
    primary: "indigo-500",
    secondary: "indigo-700",
    accent: "indigo-400",
    neutral: "slate-800",

    // background
    background: "bg-[rgb(28,28,34)]/100", // bg-[#121212]
    backgroundAlt: "bg-slate-800",
    backgroundAccent: "bg-indigo-500",

    // text
    text: "text-white",
    textMuted: "text-white/80",
    textAccent: "text-indigo-500",

    // border
    border: "border-white",
    borderMuted: "border-white/[0.2]",
    borderAccent: "border-indigo-500",

    // hover
    hoverBackground: "hover:bg-slate-800",
    hoverBackgroundAccent: "hover:bg-indigo-600",
    hoverText: "hover:text-indigo-300",
    hoverTextAccent: "hover:text-[rgb(28,28,34)]",
    hoverBorder: "hover:border-indigo-400",

    groupHoverText: "group-hover:text-indigo-300",

    buttonBackground: "bg-indigo-500",
    buttonText: "text-white",
    buttonHoverBackground: "hover:bg-indigo-600",
    buttonHoverText: "hover:text-white",

    cardBackground: "bg-[rgb(22,22,29)]/30",
    cardBorder: "border-slate-700",
    cardHoverBorder: "hover:border-indigo-400",

    // expandable card
    exCardBackground: "bg-[#121212]",
    exCardSecondaryBackground: "bg-[#1e1e1e]",

    navBackground: "bg-[rgb(28,28,34)]/100",
    navText: "text-white/80",
    navTextHover: "hover:text-indigo-400",

    // gradients
    gradientFrom: "from-indigo-500/10",
    gradientTo: "to-[rgb(22,22,29)]/10",
  },
};
