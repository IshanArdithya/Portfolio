import Link from "next/link";

const ButtonOne = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link href={link} passHref>
      <button className="bg-indigo-500 text-white px-8 py-4 border-1 w-full uppercase border-white rounded-none  shadow-bold_r_md hover:shadow-zero transition-all duration-150">
        {text}
      </button>
    </Link>
  );
};

export default ButtonOne;
