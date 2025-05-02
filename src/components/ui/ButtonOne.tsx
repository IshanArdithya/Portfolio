import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

const ButtonOne = ({ text, link }: { text: string; link: string }) => {
  const { theme } = useTheme();
  return (
    // <Link href={link} passHref>
    //   <button className="bg-indigo-500 text-white px-8 py-4 border-1 w-full uppercase border-white rounded-none  shadow-bold_r_md hover:shadow-zero transition-all duration-150">
    //     {text}
    //   </button>
    // </Link>
    <Link href={link} passHref>
      <button
        className={`${theme.textAccent} ${theme.borderAccent} text-sm font-semibold px-8 py-4 border-2 w-full uppercase rounded-full ${theme.hoverTextAccent} ${theme.hoverBackgroundAccent} transition-all duration-150`}
      >
        {text}
      </button>
    </Link>
  );
};

export default ButtonOne;
