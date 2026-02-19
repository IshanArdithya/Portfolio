"use client";

import type React from "react";

import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

import { Loader2 } from "lucide-react";

const ButtonOne = ({
  text,
  link,
  onClick,
  loading = false,
}: {
  text: string;
  link: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
}) => {
  const { theme } = useTheme();

  return (
    <Link href={link} passHref>
      <button
        disabled={loading}
        className={`${theme.textAccent} ${theme.borderAccent} cursor-pointer text-sm font-semibold px-8 py-4 border-2 w-full uppercase rounded-full ${theme.hoverTextAccent} ${theme.hoverBackgroundAccent} transition-all duration-150 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed`}
        onClick={onClick}
      >
        {loading && <Loader2 className="w-5 h-5 animate-spin" />}
        {text}
      </button>
    </Link>
  );
};

export default ButtonOne;
