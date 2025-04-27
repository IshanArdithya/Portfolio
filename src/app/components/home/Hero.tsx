"use client";

import Image from "next/image";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXing,
} from "react-icons/fa";
import ButtonOne from "../buttons/ButtonOne";
import { profile, tags } from "./constants";
import Marquee from "react-fast-marquee";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden bg-[rgb(28,28,34)]/100">
      {/* main content */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full max-w-7xl">
        {/* left section */}
        <div className="text-center md:text-left text-white">
          <h1 className="text-6xl font-bold leading-tight tracking-tight">
            {profile.name}
          </h1>
          <h3 className="mb-5 text-xl font-bold leading-tight tracking-tight">
            {profile.role}
          </h3>
          <p className="opacity-90 text-neutral-200 max-w-lg text-base md:text-lg leading-relaxed mb-6">
            {profile.description}
          </p>

          {/* tags */}
          <Marquee pauseOnHover={true} speed={40} className="max-w-md mb-5">
            <div className="flex flex-wrap mb-8">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block text-xs font-semibold mr-3 py-2 px-4 rounded-full bg-indigo-500 text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Marquee>

          {/* buttons */}
          <div className="flex flex-col gap-4 lg:flex-row mb-8">
            <ButtonOne text="my works" link="" />
            <ButtonOne text="contact" link="" />
          </div>

          {/* social icons */}
          {/* <div className="flex justify-center gap-5 text-2xl text-gray-400 mb-8">
            <SocialLink href="https://www.linkedin.com">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://github.com">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://facebook.com">
              <FaFacebook />
            </SocialLink>
            <SocialLink href="https://instagram.com">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://xing.com">
              <FaXing />
            </SocialLink>
          </div> */}
        </div>

        {/* right section */}
        <div className="flex justify-center relative">
          <div className="absolute -inset-2 rounded-3xl blur-xl transition duration-500" />
          <Image
            src="https://radnaabazar.vercel.app/assets/mascot.gif"
            alt="Illustration"
            width={600}
            height={600}
            className="w-full max-w-sm rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-indigo-400 transition-transform transform hover:scale-110"
    >
      {children}
    </a>
  );
}
