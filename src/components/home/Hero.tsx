"use client";

import Image from "next/image";
import ButtonOne from "@/components/ui/ButtonOne";
import { profile, socialLinks, statistics, tags } from "./constants";
import Marquee from "react-fast-marquee";
import { useTheme } from "@/context/ThemeContext";
import { AnimatedCircleGridPattern } from "./GridPattern";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`relative min-h-screen flex flex-col items-center justify-between px-6 pt-20 pb-10 overflow-hidden`}
      >
        <div className="relative w-full pt-20 flex flex-col items-center justify-center max-w-7xl">
          <div className="absolute inset-0 w-full h-full z-1 opacity-30">
            <AnimatedCircleGridPattern />
          </div>

          {/* main content */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full xl:pb-24 z-2">
            {/* left section */}
            <div className="text-center md:text-left">
              <h1 className="text-6xl font-bold leading-tight tracking-tight">
                {profile.name}
              </h1>
              <h3 className="mb-5 text-xl font-bold leading-tight tracking-tight">
                {profile.role}
              </h3>
              <p
                className={`opacity-90 ${theme.textMuted} max-w-lg text-base md:text-lg leading-relaxed mb-6`}
              >
                {profile.description}
              </p>

              {/* tags */}
              <Marquee
                pauseOnHover={false}
                speed={40}
                className="max-w-md mb-5"
              >
                <div className="flex flex-wrap mb-8">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`inline-block text-xs font-semibold mr-3 py-2 px-4 rounded-full ${theme.backgroundAccent}`}
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
            </div>

            {/* right section */}
            <div className="flex justify-center relative">
              <div className="absolute -inset-2 rounded-3xl blur-xl transition duration-500" />
              <Image
                src={profile.image}
                alt="Profile Photo"
                width={600}
                height={600}
                className="w-full max-w-sm rounded-full shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* statistics */}
          <section className="w-full">
            <div className="mx-auto w-full gap-4">
              <div className="flex flex-wrap items-center align-middle justify-between w-full gap-6">
                {statistics.map((stat, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-4xl xl:text-6xl font-extrabold">
                      {stat.value}
                    </span>
                    <p
                      className={`max-w-[100px] mr-5 leading-snug tracking-wide ${theme.textMuted}`}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* social links section */}
        <section className="w-full max-w-7xl">
          <div className="flex justify-center items-center gap-5 mx-4 relative mt-auto">
            {/* left line */}
            <div className={`flex-grow border-t ${theme.border}`}></div>

            {/* social icons */}
            <div className="flex gap-4 justify-center">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme.hoverText} text-xl transition-transform transform hover:scale-110`}
                >
                  <link.icon />
                </a>
              ))}
            </div>

            {/* right line */}
            <div className={`flex-grow border-t ${theme.border}`}></div>
          </div>
        </section>
      </div>
    </>
  );
}
