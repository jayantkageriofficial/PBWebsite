"use client";

export default function EventCard({ 
    title, description, image, date, location, registrationLink, isFlipped, onToggle 
}: { 
    title: string; description: string; image?: string;
    date?: string; location?: string; registrationLink?: string;
    isFlipped?: boolean; onToggle?: () => void; 
}) {
    return (
        <div 
            className="group relative w-full cursor-pointer" 
            style={{ perspective: "1000px" }} 
            onClick={onToggle}
        >
            <div
                className={`flex flex-col gap-2 rounded-2xl bg-[#111] p-2 h-full transition-all duration-300 ease-in-out
                ${isFlipped ? "rotate-y-180" : "rotate-y-0 shadow-none border border-transparent"}
                ${!isFlipped ? "group-hover:border-[rgba(55,255,0,0.5)] group-hover:shadow-[0_0_15px_rgba(55,255,0,0.25),0_0_30px_rgba(55,255,0,0.10),inset_0_0_15px_rgba(55,255,0,0.05)]" : ""} `}
                style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
            >
                {/* Front */}
                <div style={{ backfaceVisibility: "hidden" }} className="flex flex-col gap-2 h-full">
                    {/* Image area */}
                    <div className="relative w-full overflow-hidden rounded-xl bg-[#222] aspect-[4/3]">
                        {image && (
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover select-none"
                            />
                        )}
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-1 p-1">
                        <span
                            className="text-xl lg:text-2xl font-medium leading-normal align-middle"
                            style={{
                                background: "linear-gradient(135deg, #37FF00, #37FF00)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            {title}
                        </span>
                        <span className="text-sm font-normal leading-normal text-white/65">
                            {description}
                        </span>
                    </div>
                </div>

                {/* Back */}
                <div 
                    className="absolute inset-0 flex flex-col gap-3 rounded-2xl bg-[#111] p-6"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <span className="text-lg lg:text-xl font-medium leading-snug text-[#37FF00]">
                        {title}
                    </span>
                    <div className="text-xs md:text-sm text-white/80">
                        <strong>Date:</strong> {date || "TBA"}
                    </div>
                    <div className="text-xs md:text-sm text-white/80">
                        <strong>Location:</strong> {location || "TBA"}
                    </div>
                    <p className="mt-2 text-xs md:text-sm leading-relaxed text-white/60 overflow-y-auto">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
