"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function StingerTransition() {
    const [isVisible, setIsVisible] = useState(true);
    const [hasStarted, setHasStarted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        if (typeof document !== "undefined") {
            if (document.visibilityState === "visible") {
                setHasStarted(true);
            }

            const handleVisibilityChange = () => {
                if (document.visibilityState === "visible") {
                    setHasStarted(true);
                }
            };

            document.addEventListener("visibilitychange", handleVisibilityChange);
            return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
        }
    }, []);

    useEffect(() => {
        if (hasStarted) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [hasStarted]);

    if (!isVisible) return null;

    const bars = 5;

    return (
        <div className="fixed inset-0 z-100 pointer-events-none flex w-screen h-screen overflow-hidden">
            <style>
                {`
                    @keyframes stinger-slide {
                        0% { transform: translateY(0); }
                        100% { transform: translateY(100vh); }
                    }
                `}
            </style>
            {Array.from({ length: bars }).map((_, i) => (
                <div
                    key={i}
                    className={`relative h-full w-full ${theme.backgroundAccentStinger}`}
                    style={{
                        width: `${100 / bars}vw`,
                        animationName: hasStarted ? "stinger-slide" : "none",
                        animationDuration: "0.8s",
                        animationTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
                        animationFillMode: "forwards",
                        animationDelay: hasStarted ? `${i * 0.15}s` : "0s",
                    }}
                />
            ))}
        </div>
    );
}
