"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { projects } from "@/constants/constants";
import { TechIcon } from "../ui/TechIcons";

const ExternalLinkButton = ({ url, text }: { url: string; text: string }) => {
  const { theme } = useTheme();
  const ref = useRef(null);

  return (
    <Link
      href={url}
      className={`inline-flex items-center text-sm font-medium uppercase ${theme.textAccent} ${theme.hoverText} transition-all duration-75 group relative`}
      ref={ref}
    >
      <span className="relative z-5">{text}</span>
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-current"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="inline-flex items-center ml-1"
        whileHover={{ x: 2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <ExternalLink className="w-[1em] h-[1em]" strokeWidth={2} />
      </motion.div>
    </Link>
  );
};

export default function Projects() {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const techIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.1 * i,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen flex flex-col items-center justify-between px-6 py-20 overflow-hidden`}
    >
      <div className="relative w-full max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          Projects
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden border ${theme.borderMuted} ${theme.cardBackground} shadow-lg`}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
            >
              <div className="p-6">
                <motion.div
                  className="relative h-[200px] mb-4 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Image
                    src={project.image || "/images/projects/placeholder.webp"}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <div className="flex items-center justify-between mb-2">
                  <motion.h3
                    className="text-xl font-bold"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                  >
                    {project.name}
                  </motion.h3>
                  <div className="flex space-x-2">
                    {project.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={techIconVariants}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 10,
                        }}
                      >
                        <TechIcon type={tech} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="mb-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <span
                    className={`inline-block rounded-full ${theme.backgroundAccent} px-3 py-1 text-xs ${theme.text}`}
                  >
                    {project.category}
                  </span>
                </motion.div>

                <motion.p
                  className={`text-sm ${theme.textMuted} mb-4 line-clamp-3`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 * index, duration: 0.5 }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 * index, duration: 0.5 }}
                >
                  {project.githubUrl && (
                    <ExternalLinkButton url={project.githubUrl} text="Github" />
                  )}

                  {project.url && (
                    <ExternalLinkButton
                      url={project.url}
                      text="Visit Website"
                    />
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
