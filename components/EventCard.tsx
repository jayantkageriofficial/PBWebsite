"use client";

import { useState } from "react";

export default function EventCard({ 
    title, description, image, isFlipped, onToggle 
}: { 
    title: string; description: string; image?: string;
    isFlipped?: boolean; onToggle?: () => void; 
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="[perspective:1000px] max-w-[396px] cursor-pointer relative h-full" onClick={onToggle}>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`bg-[#111] rounded-[20px] p-[9px_10px] flex flex-col gap-2 transition-all duration-300 [transform-style:preserve-3d] h-full ${
                    isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
                } ${
                    hovered && !isFlipped
                        ? "border border-pbgreen/50 shadow-[0_0_15px_rgba(55,255,0,0.25),0_0_30px_rgba(55,255,0,0.10),inset_0_0_15px_rgba(55,255,0,0.05)]"
                        : "border border-transparent shadow-none"
                }`}
            >
                {/* Front */}
                <div className="backface-hidden flex flex-col gap-2 h-full">
                    {/* Image area */}
                    <div className="rounded-[14px] overflow-hidden bg-[#222] w-full aspect-[4/3] relative">
                        {image && (
                            <img src={image} alt={title} className="w-full h-full object-cover" />
                        )}
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-1 p-[4px_6px_6px]">
                        <span className="font-['Lexend',sans-serif] text-[28px] font-medium leading-[140%] align-middle bg-gradient-to-br from-[#37FF00] to-[#37FF00] bg-clip-text text-transparent">
                            {title}
                        </span>
                        <span className="font-['Lexend',sans-serif] text-[14px] font-normal leading-[140%] text-white/65">
                            {description}
                        </span>
                    </div>
                </div>

                {/* Back */}
                <div className="backface-hidden [transform:rotateY(180deg)] absolute inset-0 p-6 flex flex-col gap-3 bg-[#111] rounded-[20px]">
                    <span className="font-['Lexend',sans-serif] text-[24px] font-medium leading-[140%] text-[#37FF00]">
                        {title}
                    </span>
                    <div className="font-['Lexend',sans-serif] text-white/80 text-[14px]">
                        <strong>Date:</strong> 15th August 2024
                    </div>
                    <div className="font-['Lexend',sans-serif] text-white/80 text-[14px]">
                        <strong>Location:</strong> Main Auditorium
                    </div>
                    <p className="font-['Lexend',sans-serif] text-white/60 text-[14px] leading-relaxed mt-2 overflow-y-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    );
}
