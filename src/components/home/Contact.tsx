"use client";

import { useTheme } from "@/context/ThemeContext";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";
import { profile, socialLinks } from "./constants";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { IoIosSend } from "react-icons/io";

export default function Contact() {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <section
      ref={sectionRef}
      className={`relative flex flex-col items-center justify-center px-6 py-20 overflow-hidden`}
    >
      <div className="relative w-full max-w-7xl mx-auto z-10">
        <motion.h1
          className="text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          Contact
        </motion.h1>

        <motion.div
          className="flex flex-col items-center justify-center gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* contact card */}
          <motion.div variants={itemVariants} className="w-full max-w-2xl">
            <p className={`text-center mb-12 ${theme.textMuted}`}>
              I&apos;m always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
            <div className="flex justify-center">
              <HoverBorderGradient
                containerClassName="rounded-full cursor-pointer"
                className={`${theme.cardBackground} ${theme.text} flex items-center justify-center min-w-[270px] px-6 py-3`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={copyToClipboard}
              >
                <div className="relative h-6 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="copied"
                        className="flex items-center gap-2 absolute whitespace-nowrap"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={textVariants}
                        transition={{ duration: 0.2 }}
                      >
                        <span>Email is Copied</span>
                        <FaCheck className="text-green-300" />
                      </motion.div>
                    ) : isHovered ? (
                      <motion.div
                        key="email"
                        className="flex items-center gap-2 absolute whitespace-nowrap"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={textVariants}
                        transition={{ duration: 0.2 }}
                      >
                        <span>{profile.email}</span>
                        <FaCopy />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        className="flex items-center gap-2 absolute whitespace-nowrap"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={textVariants}
                        transition={{ duration: 0.2 }}
                      >
                        <span>Let&apos;s Get in Touch</span>
                        <IoIosSend />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </HoverBorderGradient>
            </div>
          </motion.div>

          {/* social links */}
          <motion.div variants={itemVariants} className="w-full max-w-2xl">
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <HoverBorderGradient
                        containerClassName="rounded-full"
                        className={`flex items-center justify-center p-3 rounded-full w-10 h-10 group ${theme.cardBackground} transition-all duration-300`}
                      >
                        <Icon
                          className={`text-xl ${theme.text} ${theme.groupHoverText} transition-all duration-300`}
                        />
                      </HoverBorderGradient>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
