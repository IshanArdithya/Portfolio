"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkMobile = () => {
            const isTouch = window.matchMedia("(pointer: coarse)").matches;
            const isSmallScreen = window.innerWidth <= 768;
            setIsMobile(isTouch || isSmallScreen);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        let isHovering = false;

        const numPoints = 25;
        const points = Array.from({ length: numPoints }, () => ({ x: mouse.x, y: mouse.y }));

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const handleMouseMove = (e: MouseEvent) => {
            const dx = e.clientX - mouse.x;
            const dy = e.clientY - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > 100) { // teleport without trail if cursor jumps
                for (let i = 0; i < numPoints; i++) {
                    points[i].x = e.clientX;
                    points[i].y = e.clientY;
                }
            }

            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("cursor-pointer") ||
                window.getComputedStyle(target).cursor === "pointer"
            ) {
                isHovering = true;
            } else {
                isHovering = false;
            }
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("mouseover", handleMouseOver, { passive: true });

        let currentHeadRadius = 3;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const targetRadius = isHovering ? 5 : 2.5;
            currentHeadRadius += (targetRadius - currentHeadRadius) * 0.2;

            points[0] = { x: mouse.x, y: mouse.y };
            for (let i = 1; i < numPoints; i++) {
                points[i].x += (points[i - 1].x - points[i].x) * 0.45;
                points[i].y += (points[i - 1].y - points[i].y) * 0.45;
            }

            ctx.lineCap = "round";
            ctx.lineJoin = "round";

            for (let i = 0; i < numPoints - 1; i++) {
                ctx.beginPath();
                ctx.moveTo(points[i].x, points[i].y);
                ctx.lineTo(points[i + 1].x, points[i + 1].y);

                ctx.lineWidth = Math.max((numPoints - i) * 0.25, 0.5);
                ctx.strokeStyle = `rgba(99, 102, 241, ${(1 - i / (numPoints - 1)) * 0.35})`;

                ctx.stroke();
            }


            animationFrameId = requestAnimationFrame(render);
        };
        render();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-9999 pointer-events-none hidden md:block"
            style={{ zIndex: 999999 }}
        />
    );
}
