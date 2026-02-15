"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion, useInView, Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { projects } from "@/constants/constants";
import { TechIcon } from "../ui/TechIcons";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";


const MotionLink = motion.create(Link);

const ExternalLinkButton = ({ url, text }: { url: string; text: string }) => {
  const { theme } = useTheme();

  return (
    <MotionLink
      href={url}
      className={`inline-flex items-center text-sm font-medium uppercase ${theme.textAccent} ${theme.hoverText} transition-all duration-75 group relative select-none`}
      initial="initial"
      whileHover="buttonHover"
    >
      <span className="relative z-5">{text}</span>
      <motion.div
        className="inline-flex items-center ml-1"
        variants={{
          initial: { x: 0 },
          buttonHover: { x: 2 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <ExternalLink className="w-[1em] h-[1em]" strokeWidth={2} />
      </motion.div>
    </MotionLink>
  );
};

const ProjectCard = ({
  project,
  index,
  isActive,
}: {
  project: (typeof projects)[0];
  index: number;
  isActive: boolean;
}) => {
  const { theme } = useTheme();
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [activeTooltipIndex, setActiveTooltipIndex] = useState<number | null>(
    null
  );
  const [isActiveTooltipOpen, setIsActiveTooltipOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const showHover =
    (isMobile ? isActive : isCardHovered) ||
    activeTooltipIndex !== null ||
    isActiveTooltipOpen;

  const cardVariants: Variants = {
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

  const innerHoverVariants: Variants = {
    rest: {
      y: 0,
      boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
    },
    hovered: {
      y: isMobile ? -4 : -8,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  const techIconVariants: Variants = {
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
    hovered: {
      scale: 1.1,
      y: -2,
      rotate: 0,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="relative"
      onHoverStart={() => setIsCardHovered(true)}
      onHoverEnd={() => setIsCardHovered(false)}
    >
      <motion.div
        className={`h-full w-full rounded-lg overflow-hidden border ${theme.borderMuted} ${theme.cardBackground}`}
        animate={showHover ? "hovered" : "rest"}
        variants={innerHoverVariants}
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

          <div className="flex flex-col gap-2 mb-4">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <span
                className={`text-[10px] font-bold uppercase tracking-widest ${theme.textAccent}`}
              >
                #{project.category}
              </span>
            </motion.div>

            <div className="flex flex-wrap items-center gap-3">
              <motion.h3
                className="text-xl font-bold leading-none"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                {project.name}
              </motion.h3>

              {project.active && (
                <HoverCard
                  openDelay={200}
                  closeDelay={200}
                  onOpenChange={setIsActiveTooltipOpen}
                >
                  <HoverCardTrigger asChild>
                    <div className="flex items-center gap-2 h-5 px-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 cursor-help select-none">
                      <span className="relative flex h-1.5 w-1.5">
                        <span
                          className={`animate-ping absolute inline-flex h-full w-full rounded-full ${theme.backgroundAccent} opacity-75`}
                        ></span>
                        <span
                          className={`relative inline-flex rounded-full h-1.5 w-1.5 ${theme.backgroundAccent}`}
                        ></span>
                      </span>
                      <span className="text-[9px] font-medium text-white tracking-wider uppercase">
                        Active
                      </span>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent
                    className={`w-auto px-4 py-3 ${theme.navBackground} ${theme.borderMuted} ${theme.text} select-none`}
                    side="top"
                    align="center"
                    sideOffset={5}
                  >
                    <div className="space-y-1">
                      {/*<h4 className="text-xs font-semibold uppercase tracking-wider">
                        Status
                      </h4>*/}
                      <p className={`text-xs ${theme.textMuted}`}>
                        Project being actively developed
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={techIconVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  }}
                >
                  <motion.div
                    animate={
                      activeTooltipIndex === i
                        ? { scale: 1.2, rotate: 5 }
                        : undefined
                    }
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                    }}
                  >
                    <TechIcon
                      type={tech}
                      onOpenChange={(open) =>
                        setActiveTooltipIndex(open ? i : null)
                      }
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

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
              <ExternalLinkButton url={project.url} text="Visit Website" />
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (window.innerWidth < 768) {
              const index = Number(entry.target.getAttribute("data-index"));
              setActiveCardIndex(index);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
        rootMargin: "0px",
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative flex flex-col items-center justify-between px-6 py-10 md:py-20 overflow-hidden`}
    >
      <div className="relative w-full max-w-7xl mx-auto">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          Projects
        </motion.h1>

        <motion.div
          className="flex overflow-x-auto pt-3 md:pt-0 -mx-6 px-6 snap-x snap-mandatory gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:mx-0 md:px-0 md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              data-index={index}
              className="min-w-[85vw] sm:min-w-[450px] md:min-w-0 snap-center md:snap-align-none"
            >
              <ProjectCard project={project} index={index} isActive={activeCardIndex === index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
