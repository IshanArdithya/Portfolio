"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./constants";
import { TechIcon } from "../ui/TechIcons";

const ExternalLinkButton = ({ url, text }: { url: string; text: string }) => {
  const { theme } = useTheme();
  return (
    <Link
      href={url}
      className={`inline-flex items-center text-sm font-medium uppercase ${theme.textAccent} ${theme.hoverText} transition-all duration-75`}
    >
      {text} <ExternalLink className="ml-1 w-4 h-4" />
    </Link>
  );
};

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section
      className={`relative min-h-screen flex flex-col items-center justify-between px-6 py-20 overflow-hidden`}
    >
      <div className="relative w-full max-w-7xl mx-auto">
        <motion.h1
          className="text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden border ${theme.borderMuted} ${theme.cardBackground} shadow-lg`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="p-6">
                <div className="relative h-[200px] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.image || "/images/projects/placeholder.webp"}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <div className="flex space-x-2">
                    {project.technologies.map((tech, i) => (
                      <TechIcon key={i} type={tech} />
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <span
                    className={`inline-block rounded-full ${theme.backgroundAccent} px-3 py-1 text-xs ${theme.text}`}
                  >
                    {project.category}
                  </span>
                </div>

                <p className={`text-sm ${theme.textMuted} mb-4 line-clamp-3`}>
                  {project.description}
                </p>

                <div className="flex items-center space-x-4">
                  {project.githubUrl && (
                    <ExternalLinkButton url={project.githubUrl} text="Github" />
                  )}

                  {project.url && (
                    <ExternalLinkButton
                      url={project.url}
                      text="Visit Website"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
