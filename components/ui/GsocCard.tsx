"use client";
import React from 'react';
import Confetti from 'react-confetti';
import { useMeasure } from 'react-use';

const GSoCCard = () => {
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();

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
            <div className="relative z-10 p-6 sm:p-10 lg:p-16 pb-6 lg:pb-8 text-center">
                {/* Logo/Header */}
                <div className="flex flex-wrap items-center justify-center gap-x-2 lg:gap-x-3 gap-y-1 lg:gap-y-2 mb-6 lg:mb-10">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        <span style={{ color: '#00FF66' }}>Point</span>
                        <span className="text-white ml-2">Blank</span>
                    </span>
                    <span className="italic text-2xl sm:text-4xl lg:text-5xl font-semibold text-white ml-2 lg:ml-3">dominates</span>
                </div>

                {/* GSoC Branding */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 mb-8 lg:mb-12">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                        <div className="absolute inset-0 bg-[#FFB800] blur-2xl opacity-40 rounded-full" />
                        <svg viewBox="0 0 100 100" className="relative w-full h-full drop-shadow-[0_0_15px_rgba(255,184,0,0.8)] z-10">
                            <g fill="#FFB800">
                                <rect x="22" y="22" width="56" height="56" />
                                <rect x="22" y="22" width="56" height="56" transform="rotate(45 50 50)" />
                            </g>
                            <text x="50" y="59" fontSize="26" fontWeight="900" fill="white" textAnchor="middle" fontFamily="monospace">{"</>"}</text>
                        </svg>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#FFB800] drop-shadow-[0_0_15px_rgba(255,184,0,0.5)]">
                        GSoC 2026
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 lg:gap-8 max-w-2xl mx-auto mb-8 lg:mb-10">
                    <div className="flex flex-col items-center">
                        <span className="text-6xl sm:text-8xl lg:text-[10rem] font-black text-[#7CFFB2] drop-shadow-[0_0_30px_rgba(0,255,102,0.4)] leading-none">
                            13
                        </span>
                        <span className="text-[#7CFFB2] font-semibold mt-2 lg:mt-4 text-xl sm:text-2xl lg:text-3xl drop-shadow-[0_0_10px_rgba(0,255,102,0.3)]">Mentees</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-6xl sm:text-8xl lg:text-[10rem] font-black text-[#7CFFB2] drop-shadow-[0_0_30px_rgba(0,255,102,0.4)] leading-none">
                            3
                        </span>
                        <span className="text-[#7CFFB2] font-semibold mt-2 lg:mt-4 text-xl sm:text-2xl lg:text-3xl drop-shadow-[0_0_10px_rgba(0,255,102,0.3)]">Mentors</span>
                    </div>
                </div>

                {/* Footer Text */}
                <p className="mt-8 text-[#a1a1aa] text-sm sm:text-base pb-2">
                    Hearty congratulations to all <span className="text-[#FFB800]">13 mentees</span> and <span className="text-[#FFB800]">3 mentors</span> who made history this year.
                </p>
            </div>
        </div>
    );
};

export default GSoCCard;