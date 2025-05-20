"use client";

import type React from "react";

import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

const ButtonOne = ({
  text,
  link,
  onClick,
}: {
  text: string;
  link: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const { theme } = useTheme();

  return (
    <Link href={link} passHref>
      <button
        className={`${theme.textAccent} ${theme.borderAccent} text-sm font-semibold px-8 py-4 border-2 w-full uppercase rounded-full ${theme.hoverTextAccent} ${theme.hoverBackgroundAccent} transition-all duration-150`}
        onClick={onClick}
      >
        {text}
      </button>
    </Link>
  );
};

export default ButtonOne;
