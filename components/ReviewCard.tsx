"use client";

import { Star } from "lucide-react";
import { useState } from "react";

export function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className={`w-4 h-4 ${i < count ? "text-pbgreen fill-pbgreen" : "text-white/30"}`} />
            ))}
        </div>
    );
}

export default function ReviewCard({ name, review, rating }: { name: string; review: string; rating: number }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`bg-[#191919] rounded-[20px] p-[20px_18px] flex flex-col gap-3 transition-colors duration-300 border ${hovered ? "border-pbgreen/50" : "border-transparent"}`}
        >
            <StarRating count={rating} />
            <p className="font-['Lexend',sans-serif] text-[13px] font-normal leading-[1.6] text-white/60 m-0">
                {review}
            </p>
            <span className="font-['Lexend',sans-serif] text-[14px] font-medium text-pbgreen">
                {name}
            </span>
        </div>
    );
}
