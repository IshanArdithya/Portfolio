"use client";

import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import Image from "next/image";

export default function OGImagePage() {
    return (
        <div
            className="relative flex flex-col items-center justify-center overflow-hidden"
            style={{
                width: 1200,
                height: 630,
                backgroundColor: "rgb(28, 28, 34)",
                backgroundImage:
                    "radial-gradient(circle at 15% 50%, rgba(99, 102, 241, 0.12), transparent 45%), radial-gradient(circle at 85% 30%, rgba(79, 70, 229, 0.12), transparent 45%)",
            }}
        >
            {/* bg typography watermark */}
            <div
                className="absolute font-black tracking-tighter select-none opacity-[0.03] text-white z-0"
                style={{
                    fontSize: "26rem",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    whiteSpace: "nowrap",
                    lineHeight: 0.8,
                }}
            >
                CREATIVE
            </div>

            <AnimatedGridPattern
                width={80}
                height={80}
                numSquares={50}
                maxOpacity={0.15}
                duration={2.5}
                strokeDasharray={0}
                className={cn(
                    "mask-[radial-gradient(1000px_circle_at_center,white,transparent)]",
                    "absolute inset-0 w-full h-full z-0 opacity-45"
                )}
            />

            {/* main card */}
            <div
                className="relative z-10 flex flex-col items-start justify-center p-16 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden"
                style={{
                    background:
                        "linear-gradient(145deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    width: "960px",
                    height: "440px",
                    boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
            >
                {/* card internal glows */}
                <div
                    className="absolute -top-32 -left-32 w-80 h-80 rounded-full mix-blend-screen filter blur-[80px] opacity-40 pointer-events-none"
                    style={{ background: "#6366f1" }}
                />
                <div
                    className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full mix-blend-screen filter blur-[80px] opacity-40 pointer-events-none"
                    style={{ background: "#4f46e5" }}
                />

                {/* content */}
                <div className="relative z-20 flex flex-col gap-6 w-full">
                    {/* avatar */}
                    <div className="flex items-center gap-6 mb-2">
                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.4)] border border-white/20">
                            <Image
                                src="/images/og/og-avatar.webp"
                                alt="Ishan Ardithya"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white/50 text-sm font-mono tracking-widest uppercase">
                                Portfolio
                            </span>
                            <span className="text-indigo-400 text-sm font-medium tracking-wide">
                                ishanardithya.me
                            </span>
                        </div>
                    </div>

                    <div>
                        <h1
                            className="font-extrabold tracking-tight pb-2"
                            style={{
                                fontSize: "76px",
                                lineHeight: "1",
                                background: "linear-gradient(to right, #ffffff, #c7d2fe)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Ishan Ardithya
                        </h1>
                        <h2 className="text-3xl font-semibold mt-3 tracking-wide text-indigo-200/90 flex items-center gap-4">
                            Software Engineer
                            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                            Full Stack Developer
                        </h2>
                    </div>

                    {/* highlights */}
                    <div className="flex gap-8 mt-10">
                        <div className="flex flex-col">
                            <span className="text-3xl font-extrabold text-white">3+</span>
                            <span className="text-sm font-medium text-indigo-300/80 uppercase tracking-widest mt-1">Years Exp</span>
                        </div>
                        <div className="w-px h-12 bg-indigo-500/20" />
                        <div className="flex flex-col">
                            <span className="text-3xl font-extrabold text-white">20+</span>
                            <span className="text-sm font-medium text-indigo-300/80 uppercase tracking-widest mt-1">Projects</span>
                        </div>
                        <div className="w-px h-12 bg-indigo-500/20" />
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                                <span className="text-sm font-semibold text-indigo-100 tracking-wide">Open to Opportunities</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
