"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useId, useCallback, memo } from "react";
import { WobbleCard } from "../ui/wobble-card";
import { interests } from "./constants";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { X } from "lucide-react";
import { ExpandedCardProps, Interests } from "@/types";

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

  return (
    <section
      ref={sectionRef}
      className={`relative flex flex-col items-center justify-between px-6 py-20 overflow-hidden`}
    >
      <div className="relative w-full max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          Personal
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              className={interest.span}
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
            >
              <WobbleCard
                containerClassName={`${interest.span} relative overflow-hidden group cursor-pointer`}
                className="h-[250px] z-10 relative"
              >
                <div className="max-w-xs relative z-10">
                  <h2
                    className={`text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] ${theme.text}`}
                  >
                    {interest.title}
                  </h2>
                  <p
                    className={`mt-3 text-left text-base/6 ${theme.textMuted}`}
                  >
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
            className={`w-full max-w-[800px] h-auto max-h-[90vh] ${theme.exCardBackground} rounded-lg overflow-hidden pointer-events-auto`}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
              duration: 0.4,
            }}
          >
            <div className={`relative p-8 pb-0 ${theme.text}`}>
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

            <div className="p-8 pt-6">
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
