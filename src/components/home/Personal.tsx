"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import { useRef, useState, useId, useCallback, memo, useEffect } from "react";
import { WobbleCard } from "../ui/wobble-card";
import { interests } from "@/constants/constants";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { X } from "lucide-react";
import { ExpandedCardProps, Interests } from "@/types";

const PersonalCard = ({
  interest,
  index,
  activeInterest,
  setActiveInterest,
  isInView,
  id,
  isActive,
}: {
  interest: Interests;
  index: number;
  activeInterest: Interests | null;
  setActiveInterest: (interest: Interests) => void;
  isInView: boolean;
  id: string;
  isActive: boolean;
}) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsHovered(isActive);
    }
  }, [isMobile, isActive]);

  const cardVariants: Variants = {
    rest: { y: 0 },
    hovered: {
      y: isMobile ? -4 : -8,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  return (
    <motion.div
      className="h-full w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.7,
        type: "spring",
        stiffness: 100,
        delay: index * 0.1,
      }}
      onClick={() => setActiveInterest(interest)}
      layoutId={`card-${interest.title}-${id}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="h-[250px] w-full"
        animate={isHovered ? "hovered" : "rest"}
        variants={cardVariants}
      >
        <WobbleCard
          containerClassName="h-full relative overflow-hidden group cursor-pointer"
          className="h-full z-10 relative"
        >
          <div className="max-w-xs relative z-10">
            <h2
              className={`text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] ${theme.text}`}
            >
              {interest.title}
            </h2>
            <p className={`mt-3 text-left text-base/6 ${theme.textMuted}`}>
              {interest.subtitle}
            </p>
          </div>
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={interest.image || "/placeholder.svg"}
              alt={`${interest.title} background`}
              fill
              className="opacity-60 mix-blend-overlay object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out filter saturate-40 brightness-55 group-hover:saturate-100 group-hover:brightness-100"
            />
          </div>
        </WobbleCard>
      </motion.div>
    </motion.div>
  );
};

export default function Personal() {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [activeInterest, setActiveInterest] = useState<Interests | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const id = useId();

  const handleClose = useCallback(() => {
    setActiveInterest(null);
  }, []);

  useOutsideClick(cardRef, handleClose);

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
          Personal
        </motion.h1>

        <div className="flex overflow-x-auto pt-3 pb-8 -mx-6 px-6 snap-x snap-mandatory gap-6 md:grid md:grid-cols-1 lg:grid-cols-3 md:gap-6 md:pt-0 md:pb-0 md:mx-0 md:px-0 md:overflow-visible scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {interests.map((interest, index) => (
            <div
              key={interest.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              data-index={index}
              className={`min-w-[85vw] sm:min-w-[450px] md:min-w-0 snap-center md:snap-align-none ${interest.span}`}
            >
              <PersonalCard
                interest={interest}
                index={index}
                activeInterest={activeInterest}
                setActiveInterest={setActiveInterest}
                isInView={isInView}
                id={id}
                isActive={activeCardIndex === index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* expandable card modal */}
      <AnimatePresence mode="wait">
        {activeInterest && (
          <ExpandedCard
            interest={activeInterest}
            onClose={handleClose}
            cardRef={cardRef}
            id={id}
            theme={theme}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

const ExpandedCard = memo<ExpandedCardProps>(
  ({ interest, onClose, cardRef, id, theme }) => {
    useEffect(() => {
      document.body.style.overflow = "clip";

      return () => {
        document.body.style.overflow = "";
      };
    }, []);

    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          className="fixed inset-0 bg-black/90 h-full w-full z-40"
          onClick={onClose}
        />
        <div className="fixed inset-0 grid place-items-center z-50 p-4 pointer-events-none">
          <motion.div
            layoutId={`card-${interest.title}-${id}`}
            ref={cardRef}
            className={`w-full max-w-[800px] h-auto max-h-[90vh] md:max-h-[85vh] flex flex-col ${theme.exCardBackground} rounded-lg overflow-hidden pointer-events-auto`}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
              duration: 0.4,
            }}
          >
            <div className={`relative p-8 pb-0 shrink-0 ${theme.text}`}>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                className={`absolute top-6 right-6 z-50 flex items-center justify-center ${theme.text} rounded-full h-8 w-8 pointer-events-auto transition-colors`}
                onClick={onClose}
              >
                <X className="h-6 w-6" />
              </motion.button>

              <div className="mb-2 text-gray-400 text-sm font-medium">
                Interest
              </div>

              <div className="flex flex-col space-y-1">
                <h2 className="text-4xl font-bold tracking-tight">
                  {interest.title}
                </h2>
                <h3 className="text-3xl font-semibold tracking-tight">
                  {interest.subtitle}
                </h3>
              </div>
            </div>

            <div className="p-8 pt-6 flex-1 overflow-y-auto dark-modal-scrollbar min-h-0">
              <div
                className={`${theme.exCardSecondaryBackground} rounded-lg p-6 text-base leading-relaxed`}
              >
                <div className="flex flex-col">
                  <div className={`${theme.text} mb-3`}>
                    {interest.semititle}
                  </div>
                  <p className="whitespace-pre-line text-gray-400">
                    {interest.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </>
    );
  }
);

ExpandedCard.displayName = "ExpandedCard";
