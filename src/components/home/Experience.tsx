"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { FaGlobe, FaLinkedin } from "react-icons/fa";
import { experiences } from "@/constants/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className={`relative flex flex-col items-center justify-between px-6 py-10 md:py-20 overflow-hidden`}
    >
      <div className="relative w-full max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          Experience
        </motion.h1>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full"
            >
              <div
                className={`relative w-full overflow-hidden border ${theme.borderMuted} rounded-4xl flex flex-col p-6 md:p-8 group transition-all duration-300`}
                style={{
                  background:
                    "linear-gradient(to bottom, #16161B 10%, #1B1B21 80%)",
                }}
              >
                {/* light hover */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                {/* header row */}
                <div className="flex flex-col md:flex-row gap-4 items-center md:items-start mb-4">
                  {/* logo container */}
                  <div className="relative shrink-0">
                    <Image
                      src={exp.companylogo || "/placeholderlogo_company.png"}
                      alt={`${exp.company} logo`}
                      width={120}
                      height={120}
                      className="w-20 h-20 md:w-23 md:h-23 object-contain rounded-xl border-2 border-white/10 md:group-hover:animate-pulse"
                    />
                  </div>

                  {/* header text details */}
                  <div className="flex flex-col flex-grow pt-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 leading-tight">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-base md:text-lg font-medium text-gray-400">
                        {exp.company}
                      </h4>
                      {exp.links && exp.links.length > 0 && (
                        <div className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
                          {exp.links.map((link, i) => {
                            const Icon =
                              link.type === "linkedin" ? FaLinkedin : FaGlobe;
                            return (
                              <Link
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors p-1"
                              >
                                <Icon className="text-base md:text-lg" />
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <p className={`${theme.dateText} font-medium text-xs md:text-sm tracking-wide uppercase`}>
                      {exp.startDate} — {exp.endDate}
                    </p>
                  </div>
                </div>

                {/* divider line */}
                <div className={`w-full h-px ${theme.divider} mb-6`} />

                {/* description */}
                <div className="w-full">
                  <p className="text-gray-400 text-base leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* tags */}
                  {exp.tech && exp.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((techName, t) => (
                        <span
                          key={t}
                          className={`inline-block text-xs font-semibold px-4 py-2 rounded-full ${theme.tagBase} transition-transform hover:scale-105`}
                        >
                          {techName}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
