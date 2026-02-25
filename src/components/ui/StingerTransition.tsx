"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function StingerTransition() {
    const [isVisible, setIsVisible] = useState(true);
    const { theme } = useTheme();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1100);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    const bars = 5;

    return (
        <div
            className="fixed inset-0 pointer-events-none flex w-screen h-screen overflow-hidden"
            style={{ zIndex: 9999999 }}
        >
            {Array.from({ length: bars }).map((_, i) => (
                <div
                    key={i}
                    className={`relative h-full w-full ${theme.backgroundAccentStinger}`}
                    style={{
                        width: `${100 / bars}vw`,
                        animationName: "stinger-slide",
                        animationDuration: "0.8s",
                        animationTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
                        animationFillMode: "forwards",
                        animationDelay: `${i * 0.15}s`,
                    }}
                />
            ))}
        </div>
    );
}
