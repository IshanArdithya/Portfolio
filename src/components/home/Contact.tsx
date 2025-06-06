"use client";

import { useTheme } from "@/context/ThemeContext";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";
import { profile, socialLinks } from "@/constants/constants";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { AnimatedCircleFooterGridPattern } from "@/components/home/GridPattern";
import { IoIosSend } from "react-icons/io";

export default function Contact() {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const copyToClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(profile.email)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 5000);
        })
        .catch(() => {
          fallbackCopyTextToClipboard(profile.email);
        });
    } else {
      fallbackCopyTextToClipboard(profile.email);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    // Create a temporary textarea to copy text on older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 5000);
      } else {
        alert("Failed to copy email.");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      alert("Failed to copy email.");
    }

    document.body.removeChild(textArea);
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
      <div className="absolute inset-0 w-full h-full z-1 opacity-30">
        <AnimatedCircleFooterGridPattern />
      </div>
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
          <motion.div variants={itemVariants} className="w-full max-w-5xl">
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
                      <motion.div
                        whileHover="hovered"
                        initial="rest"
                        animate="rest"
                        className="group"
                      >
                        <HoverBorderGradient
                          containerClassName="rounded-full"
                          className={`flex items-center justify-center p-3 rounded-full w-10 h-10 ${theme.cardBackground} transition-all duration-300`}
                        >
                          <motion.div
                            variants={{
                              rest: { scale: 1, rotate: 0 },
                              hovered: { scale: 1.2, rotate: 5 },
                            }}
                            className="text-xl"
                            transition={{ duration: 0.3 }}
                          >
                            <Icon
                              className={`${theme.text} ${theme.groupHoverText} transition-all duration-300`}
                            />
                          </motion.div>
                        </HoverBorderGradient>
                      </motion.div>
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
