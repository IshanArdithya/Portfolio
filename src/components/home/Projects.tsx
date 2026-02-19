"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion, useInView, Variants, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { projects } from "@/constants/constants";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function Projects() {
  const { theme } = useTheme();
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
  const carouselRef = useRef<HTMLDivElement>(null);

  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", checkScroll);
      checkScroll();
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      carousel?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

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

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / 3;
      const targetScroll =
        carouselRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      carouselRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`relative flex flex-col items-center justify-between px-6 py-10 md:py-20 overflow-hidden`}
    >
      <div className="relative w-full max-w-7xl mx-auto">
        {/* header */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-16 gap-4">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          >
            Projects
          </motion.h1>
        </div>

        {/* carousel container with side nav */}
        <div className="relative group">
          {/* desktop nav buttons */}
          <div className="hidden md:block pointer-events-none absolute inset-0 z-20 overflow-visible h-full">

            {/* left button */}
            <div className="absolute left-4 xl:-left-12 top-1/2 -translate-y-1/2 z-30 pointer-events-auto">
              <AnimatePresence>
                {canScrollLeft && (
                  <motion.button
                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => scrollCarousel("left")}
                    className={`p-3 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-white shadow-lg hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-colors duration-300`}
                    aria-label="Previous projects"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* right button */}
            <div className="absolute right-4 xl:-right-12 top-1/2 -translate-y-1/2 z-30 pointer-events-auto">
              <AnimatePresence>
                {canScrollRight && (
                  <motion.button
                    initial={{ opacity: 0, x: -20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -10, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => scrollCarousel("right")}
                    className={`p-3 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-white shadow-lg hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-colors duration-300`}
                    aria-label="Next projects"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* projects grid/carousel */}
          <motion.div
            ref={carouselRef}
            className="flex overflow-x-auto pt-3 md:pt-4 md:-mt-4 -mx-6 px-6 snap-x snap-mandatory gap-6 
            md:grid md:grid-rows-2 md:grid-flow-col md:auto-cols-[minmax(calc(33.333%-1.33333rem),1fr)] md:gap-8 md:mx-0 md:px-0 md:overflow-x-auto md:snap-mandatory 
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {sortedProjects.map((project, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                data-index={index}
                className="min-w-[85vw] sm:min-w-[450px] md:min-w-0 snap-center md:snap-start h-full"
              >
                <ProjectCard
                  project={project}
                  index={index}
                  isActive={activeCardIndex === index}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
