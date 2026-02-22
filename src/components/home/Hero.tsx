"use client";

import Image from "next/image";
import ButtonOne from "@/components/ui/ButtonOne";
import { profile, socialLinks, statistics, tags } from "@/constants/constants";
import Marquee from "react-fast-marquee";
import { useTheme } from "@/context/ThemeContext";
import { Typewriter } from "react-simple-typewriter";
import { AnimatedCircleGridPattern } from "@/components/home/GridPattern";
import {
  motion,
  useInView,
  useMotionValue,
  useAnimationFrame,
  Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { smoothScrollTo } from "@/lib/utils";

const AnimatedCounter = ({
  value,
  duration = 2,
}: {
  value: number;
  duration?: number;
}) => {
  const counterRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const isInView = useInView(counterRef, { once: true, amount: 0.5 });

  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;

    if (isInView) {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1
        );
        setCount(Math.floor(progress * value));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setCount(value);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, value, duration]);

  return <span ref={counterRef}>{count}</span>;
};

const AnimatedButton = ({
  text,
  link,
  downloadFile,
}: {
  text: string;
  link: string;
  downloadFile?: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (downloadFile) {
      setIsLoading(true);
      // simulate net validation/fetch delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      const a = document.createElement("a");
      a.href = downloadFile;
      a.download = downloadFile.split("/").pop() || "file";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      setIsLoading(false);
      return;
    }

    if (link.startsWith("#")) {
      const targetId = link.substring(1);
      smoothScrollTo(targetId, 1000);
    } else {
      window.location.href = link;
    }
  };
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="cursor-pointer"
    >
      <ButtonOne text={text} link={link} onClick={handleClick} loading={isLoading} />
    </motion.div>
  );
};

const FloatingImage = ({ src, alt, isInView }: { src: string; alt: string; isInView: boolean }) => {
  const { theme } = useTheme();
  const y = useMotionValue(0);

  useAnimationFrame((t) => {
    y.set(Math.sin(t / 1500) * 2);
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      style={{ y }}
      className="relative flex items-center justify-center p-5 md:p-7"
    >
      {/* outer ring */}
      <motion.svg
        className={`absolute inset-2.5 md:inset-3 w-[calc(100%-1.25rem)] md:w-[calc(100%-1.5rem)] h-[calc(100%-1.25rem)] md:h-[calc(100%-1.5rem)] opacity-50 pointer-events-none ${theme.textAccent}`}
        viewBox="0 0 100 100"
        style={{ overflow: "visible" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="50"
          cy="50"
          r="49"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="8 6" // dash length, gap length
          vectorEffect="non-scaling-stroke"
        />
      </motion.svg>

      {/* inner ring */}
      <motion.svg
        className={`absolute inset-3 md:inset-4 w-[calc(100%-1.5rem)] md:w-[calc(100%-2rem)] h-[calc(100%-1.5rem)] md:h-[calc(100%-2rem)] opacity-40 pointer-events-none ${theme.textAccent}`}
        viewBox="0 0 100 100"
        style={{ overflow: "visible" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 5"
          vectorEffect="non-scaling-stroke"
        />
      </motion.svg>

      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={600}
        height={600}
        unoptimized // added because the image is a gif
        className="w-full max-w-sm rounded-full shadow-2xl object-cover relative z-10 brightness-[0.90] hover:brightness-100 transition-all duration-500"
      />
    </motion.div>
  );
};

export default function Hero() {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const socialVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.8 + i * 0.1,
      },
    }),
  };

  return (
    <>
      <motion.div
        ref={sectionRef}
        className={`relative min-h-dvh flex flex-col items-center justify-between px-6 pt-32 pb-10 md:pt-40 md:pb-10 overflow-hidden`}
      >
        <div className="relative w-full flex flex-col items-center justify-center max-w-7xl">
          <div className="absolute inset-0 w-full h-full z-1 opacity-30">
            <AnimatedCircleGridPattern />
          </div>

          {/* main content */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full xl:pb-24 z-2">
            {/* left section */}
            <motion.div
              className="text-center md:text-left order-2 md:order-1"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
                variants={itemVariants}
              >
                {profile.name}
              </motion.h1>

              <motion.h3
                className="mb-5 text-lg md:text-xl font-bold leading-tight tracking-tight min-h-[1.5em]"
                variants={itemVariants}
              >
                <div className={`inline-block ${theme.textAccent}`}>
                  <Typewriter
                    words={profile.roles}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </div>
              </motion.h3>

              <motion.p
                className={`opacity-90 ${theme.textMuted} max-w-lg mx-auto md:mx-0 text-base md:text-lg leading-relaxed mb-6`}
                variants={itemVariants}
              >
                {profile.description}
              </motion.p>

              {/* tags */}
              <motion.div className="px-3 md:px-0" variants={itemVariants}>
                <Marquee
                  pauseOnHover={true}
                  speed={40}
                  className="max-w-md mb-5 mx-auto md:mx-0"
                >
                  <div className="flex flex-wrap mb-8 mt-1">
                    {tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        className={`inline-block text-xs font-semibold mr-3 py-2 px-4 rounded-full ${theme.backgroundAccent}`}
                        whileHover={{
                          scale: 1.1,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          },
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </Marquee>
              </motion.div>

              {/* buttons */}
              <motion.div
                className="flex flex-col gap-4 lg:flex-row mb-8"
                variants={itemVariants}
              >
                <AnimatedButton text="contact" link="#contact" />
                <AnimatedButton
                  text="download cv"
                  link="#"
                  downloadFile="/IshanArdithyaCV.pdf"
                />
              </motion.div>
            </motion.div>

            {/* right section */}
            <div className="flex justify-center relative order-1 md:order-2">
              <FloatingImage src={profile.image} alt="Profile Photo" isInView={isInView} />
            </div>
          </div>

          {/* statistics */}
          <motion.section
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="mx-auto w-full gap-4">
              <div className="grid grid-cols-2 md:flex md:flex-wrap items-center align-middle justify-between w-full gap-6">
                {statistics.map((stat, index) => {
                  const currentDate = new Date();
                  const currentYear = currentDate.getFullYear();
                  const currentMonth = currentDate.getMonth() + 1;

                  const displayValue =
                    stat.birthYear !== undefined &&
                      stat.birthMonth !== undefined
                      ? currentYear -
                      stat.birthYear -
                      (currentMonth < stat.birthMonth ? 1 : 0)
                      : stat.value ?? 0;

                  return (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-4xl xl:text-6xl font-extrabold">
                        <AnimatedCounter value={displayValue} />
                      </span>
                      <p
                        className={`max-w-[100px] mr-5 leading-snug tracking-wide ${theme.textMuted}`}
                      >
                        {stat.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>
        </div>

        {/* social links section */}
        <motion.section
          className="w-full max-w-7xl mt-10 md:mt-0"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex justify-center items-center gap-5 mx-4 relative mt-auto">
            {/* left line */}
            <motion.div
              className={`flex-grow border-t ${theme.border}`}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ originX: 1 }}
            ></motion.div>

            {/* social icons */}
            <div className="flex gap-4 justify-center">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  custom={index}
                  variants={socialVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme.hoverText} text-xl`}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon />
                </motion.a>
              ))}
            </div>

            {/* right line */}
            <motion.div
              className={`flex-grow border-t ${theme.border}`}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ originX: 0 }}
            ></motion.div>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
}
