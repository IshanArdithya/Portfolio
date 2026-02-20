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

  scrollbarThumb: string;
  scrollbarHover: string;
  scrollbarTrack: string;

  // exp section
  dateText: string;
  tagBase: string;
  divider: string;

  // contact section
  contactTextAccent: string;
  contactIconContainer: string;
  contactIcon: string;
  socialHover: string;
}

export const themes: Record<ThemeKey, Theme> = {
  indigo: {
    // base
    primary: "indigo-500",
    secondary: "indigo-700",
    accent: "indigo-400",
    neutral: "slate-800",

    // background
    background: "bg-[rgb(28,28,34)]", // bg-[#121212]
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

    // scrollbar
    scrollbarThumb: "#6366f1", // indigo-500
    scrollbarHover: "#4f46e5", // indigo-600
    scrollbarTrack: "#151518",

    // experience section
    dateText: "text-indigo-300/80",
    tagBase:
      "bg-indigo-900/20 border border-indigo-500/20 text-indigo-200 hover:bg-indigo-900/30",
    divider:
      "bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent",

    // contact section
    contactTextAccent: "text-indigo-400",
    contactIconContainer: "bg-indigo-500/10 group-hover/btn:bg-indigo-500/20",
    contactIcon: "text-indigo-400",
    socialHover: "hover:bg-indigo-500/20 hover:border-indigo-500/30",
  },
};
