"use client";

import { useTheme } from "@/context/ThemeContext";
import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import { useRef, useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";
import { profile, socialLinks } from "@/constants/constants";
import { AnimatedCircleFooterGridPattern } from "@/components/home/GridPattern";
import { IoIosSend } from "react-icons/io";

export default function Contact() {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(profile.email)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 3000);
        })
        .catch(() => {
          fallbackCopyTextToClipboard(profile.email);
        });
    } else {
      fallbackCopyTextToClipboard(profile.email);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    // temp textarea to copy text on old browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;

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
        setTimeout(() => setCopied(false), 3000);
      } else {
        alert("Failed to copy email.");
      }
    } catch (err) {
      alert("Failed to copy email.");
    }

    document.body.removeChild(textArea);
  };

  return (
    <section
      ref={sectionRef}
      className={`relative flex flex-col items-center justify-center px-6 py-20 overflow-hidden min-h-[60vh]`}
    >
      <div className="absolute inset-0 w-full h-full z-0 opacity-40">
        <AnimatedCircleFooterGridPattern />
      </div>

      <div className="relative w-full max-w-7xl mx-auto z-10">
        {/* section title */}
        {/* <motion.h1
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          Contact
        </motion.h1> */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
          className="relative w-full"
        >
          <div
            className={`relative w-full overflow-hidden border ${theme.borderMuted} rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 group`}
            style={{
              background: "linear-gradient(to bottom right, #16161B, #1c1c21)",
            }}
          >
            {/* glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50 pointer-events-none" />

            {/* left side */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:max-w-2xl relative z-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Have an idea? <br />
                <span className={theme.contactTextAccent}>Let&apos;s build it.</span>
              </h2>
              <p className={`text-base md:text-lg ${theme.textMuted} leading-relaxed max-w-lg`}>
                I&apos;m currently available for freelance work. If you have a project
                that needs some creative touch, I&apos;d love to hear about it.
              </p>
            </div>

            {/* right side */}
            <div className="flex flex-col items-center lg:items-end w-full lg:w-auto gap-6 relative z-10">
              {/* copy email button */}
              <button
                onClick={copyToClipboard}
                className="group/btn relative w-full sm:w-auto min-w-[300px] flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-1.5 pr-4 md:p-2 md:pr-6 transition-all duration-300 active:scale-[0.98]"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-colors ${theme.contactIconContainer}`}>
                    <IoIosSend className={`${theme.contactIcon} text-lg md:text-2xl`} />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wider">
                      Mail me at
                    </span>
                    <span className="text-white font-semibold text-sm md:text-base">
                      {profile.email}
                    </span>
                  </div>
                </div>

                <div className="relative ml-4">
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                      >
                        <FaCheck className={`${theme.textAccent} text-lg md:text-xl`} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                      >
                        <FaCopy className="text-gray-500 group-hover/btn:text-white transition-colors text-lg md:text-xl" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>

              {/* social links row */}
              <div className="flex items-center justify-center gap-3 md:gap-4 mt-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ${theme.socialHover}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="text-lg md:text-2xl" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
