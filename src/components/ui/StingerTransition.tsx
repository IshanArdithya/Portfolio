"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function StingerTransition() {
    const [isVisible, setIsVisible] = useState(true);
    const { theme } = useTheme();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

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
                        animation: `stinger-slide 0.8s cubic-bezier(0.76, 0, 0.24, 1) forwards`,
                        animationDelay: `${i * 0.15}s`,
                    }}
                />
            ))}
        </div>
    );
}
