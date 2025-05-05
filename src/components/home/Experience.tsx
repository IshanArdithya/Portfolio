"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { FaGlobe, FaLinkedin } from "react-icons/fa";
import { experiences } from "./constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className={`relative flex flex-col items-center justify-between px-6 py-20 overflow-hidden`}
    >
      <div className="relative w-full max-w-7xl mx-auto">
        <motion.h1
          className="text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          Experience
        </motion.h1>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className={`group relative overflow-hidden border ${theme.borderMuted} ${theme.cardBackground} rounded-2xl p-6 md:p-8 backdrop-blur-sm bg-opacity-5
                }`}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                  <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                    <div className="relative">
                      <div
                        className={`relative ${theme.borderMuted} rounded-2xl border-2 transition-transform duration-700 group-hover:animate-pulse`}
                      >
                        <Image
                          src={
                            exp.companylogo || "/placeholderlogo_company.png"
                          }
                          alt={`${exp.company} logo`}
                          width={100}
                          height={100}
                          className="rounded-xl object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span
                        className={`text-sm font-medium px-3 py-1 rounded-full inline-flex items-center ${theme.backgroundAccent} bg-opacity-20 w-fit`}
                      >
                        {exp.startDate} — {exp.endDate}
                      </span>

                      {exp.links && exp.links.length > 0 && (
                        <div className="flex items-center gap-3">
                          {exp.links.map((link, i) => {
                            const Icon =
                              link.type === "linkedin" ? FaLinkedin : FaGlobe;
                            return (
                              <motion.div
                                key={i}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Link
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`${theme.hoverText} flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 transition-colors duration-200`}
                                  aria-label={
                                    link.type === "linkedin"
                                      ? "LinkedIn profile"
                                      : "Website"
                                  }
                                >
                                  <Icon className="text-lg" />
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <div>
                      <h3
                        className={`text-2xl font-bold mb-1 ${theme.groupHoverText} transition-colors duration-200`}
                      >
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <h4 className="text-xl font-medium opacity-90">
                          {exp.company}
                        </h4>
                      </div>
                      <p
                        className={`${theme.textMuted} text-base leading-relaxed`}
                      >
                        {exp.description}
                      </p>
                    </div>

                    {exp.tech && exp.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.tech.map((techName, t) => (
                          <motion.span
                            key={t}
                            className={`rounded-full ${theme.backgroundAccent} px-3 py-1 text-sm font-medium text-purple-50`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {techName}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
