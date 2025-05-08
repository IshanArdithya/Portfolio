"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WobbleCard } from "../ui/wobble-card";
import { interests } from "./constants";
import Image from "next/image";

export default function Personal() {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen flex flex-col items-center justify-between px-6 py-20 overflow-hidden`}
    >
      <div className="relative w-full max-w-7xl mx-auto">
        <motion.h1
          className="text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          Personal
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              className={interest.span}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 100,
                delay: index * 0.1,
              }}
            >
              <WobbleCard
                containerClassName={`${interest.span} ${interest.bgColor} relative overflow-hidden group`}
                className="h-full z-10 relative"
              >
                <div className="max-w-xs relative z-10">
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    {interest.title}
                  </h2>
                  <p className="mt-4 text-left text-base/6 text-neutral-200">
                    {interest.subtitle}
                  </p>
                </div>
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={interest.image}
                    alt={`${interest.title} background`}
                    layout="fill"
                    className="opacity-60 mix-blend-overlay object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </WobbleCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
