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
            style={{
                backgroundColor: "#191919",
                borderRadius: "20px",
                border: hovered ? "1px solid rgba(55,255,0,0.5)" : "1px solid transparent",
                padding: "20px 18px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition: "border-color 0.3s ease",
            }}
        >
            <StarRating count={rating} />
            <p
                style={{
                    fontFamily: "'Lexend', sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    lineHeight: "1.6",
                    color: "rgba(255,255,255,0.6)",
                    margin: 0,
                }}
            >
                {review}
            </p>
            <span
                style={{
                    fontFamily: "'Lexend', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#37FF00",
                }}
            >
                {name}
            </span>
        </div>
    );
}
