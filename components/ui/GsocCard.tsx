"use client";
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useMeasure } from 'react-use';
import confetti from 'canvas-confetti';
import { animate } from 'framer-motion';

const CountUpNumber = ({ value }: { value: number }) => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const controls = animate(1, value, {
            duration: 0.8,
            ease: "easeOut",
            onUpdate(latest) {
                setCount(Math.round(latest));
            }
        });
        return controls.stop;
    }, [value]);

    return <>{count}</>;
};

const GSoCCard = () => {
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();

    const triggerConfetti = (e: React.MouseEvent) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;
        
        confetti({
            particleCount: 60,
            spread: 70,
            origin: { x, y },
            colors: ['#00FF66', '#FFB800', '#7CFFB2', '#FFFFFF'],
            zIndex: 100
        });
    };

    return (
        <div ref={ref} className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-3xl bg-black border-2 border-[#00FF66]/40 shadow-[0_0_30px_rgba(0,255,102,0.15)]">
            {/* Dynamic Background Effects */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
                {/* Dot Grid */}
                <div 
                    className="absolute inset-0 opacity-20"
                    style={{ 
                        backgroundImage: 'radial-gradient(#00FF66 2px, transparent 2px)', 
                        backgroundSize: '24px 24px' 
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{ background: 'radial-gradient(50% 50% at 50% 50%, transparent 0%, rgba(0,0,0,0.8) 100%)' }}
                />
                {/* Green and Yellow glow */}
                <div
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#00C853]/10 to-transparent blur-3xl"
                />
                {/* Confetti Animation */}
                {width > 0 && height > 0 && (
                    <Confetti
                        width={width}
                        height={height}
                        recycle={true}
                        numberOfPieces={80}
                        colors={['#00FF66', '#FFB800', '#7CFFB2', '#FFFFFF']}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10, pointerEvents: 'none' }}
                    />
                )}
            </div>

            {/* Content Container */}
            <div className="relative z-10 px-6 sm:px-8 lg:px-12 xl:px-16 py-4 lg:py-6 text-center">
                {/* Logo/Header */}
                <div className="flex flex-wrap items-center justify-center gap-x-2 lg:gap-x-3 gap-y-1 lg:gap-y-2 mb-3 lg:mb-5 xl:mb-6">
                    <span className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight">
                        <span style={{ color: '#00FF66' }}>Point</span>
                        <span className="text-white ml-2">Blank</span>
                    </span>
                    <span className="italic text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-semibold text-white ml-2 lg:ml-3">dominates</span>
                </div>

                {/* GSoC Branding */}
                <div className="flex flex-col items-center justify-center gap-1 lg:gap-2 mb-4 lg:mb-6 xl:mb-8">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-20 lg:h-20 xl:w-24 xl:h-24">
                        <div className="absolute inset-0 bg-[#FFB800] blur-2xl opacity-40 rounded-full" />
                        <svg viewBox="0 0 100 100" className="relative w-full h-full drop-shadow-[0_0_15px_rgba(255,184,0,0.8)] z-10">
                            <g fill="#FFB800">
                                <rect x="22" y="22" width="56" height="56" />
                                <rect x="22" y="22" width="56" height="56" transform="rotate(45 50 50)" />
                            </g>
                            <text x="50" y="59" fontSize="26" fontWeight="900" fill="white" textAnchor="middle" fontFamily="monospace">{"</>"}</text>
                        </svg>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#FFB800] drop-shadow-[0_0_15px_rgba(255,184,0,0.5)]">
                        GSoC 2026
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 lg:gap-6 xl:gap-8 max-w-2xl mx-auto mb-2 lg:mb-4">
                    <div className="flex flex-col items-center">
                        <span 
                            onClick={triggerConfetti}
                            className="text-6xl sm:text-8xl lg:text-8xl xl:text-[10rem] font-black text-[#7CFFB2] drop-shadow-[0_0_30px_rgba(0,255,102,0.4)] leading-none cursor-pointer hover:scale-110 transition-transform active:scale-95 select-none"
                            title="Click for a surprise!"
                        >
                            <CountUpNumber value={13} />
                        </span>
                        <span className="text-[#7CFFB2] font-semibold mt-1 lg:mt-2 text-xl sm:text-2xl lg:text-2xl xl:text-3xl drop-shadow-[0_0_10px_rgba(0,255,102,0.3)]">Mentees</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span 
                            onClick={triggerConfetti}
                            className="text-6xl sm:text-8xl lg:text-8xl xl:text-[10rem] font-black text-[#7CFFB2] drop-shadow-[0_0_30px_rgba(0,255,102,0.4)] leading-none cursor-pointer hover:scale-110 transition-transform active:scale-95 select-none"
                            title="Click for a surprise!"
                        >
                            <CountUpNumber value={3} />
                        </span>
                        <span className="text-[#7CFFB2] font-semibold mt-1 lg:mt-2 text-xl sm:text-2xl lg:text-2xl xl:text-3xl drop-shadow-[0_0_10px_rgba(0,255,102,0.3)]">Mentors</span>
                    </div>
                </div>

                {/* Footer Text */}
                <p className="mt-2 lg:mt-4 text-[#a1a1aa] text-sm sm:text-base pb-1">
                    Hearty congratulations to all <span className="text-[#FFB800]">13 mentees</span> and <span className="text-[#FFB800]">3 mentors</span> who made history this year.
                </p>
            </div>
        </div>
    );
};

export default GSoCCard;