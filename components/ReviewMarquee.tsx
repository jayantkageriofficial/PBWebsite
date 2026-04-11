"use client";

import ReviewCard from "@/components/ReviewCard";

const reviews = [
    { name: "First name", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 5 },
    { name: "First name", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 5 },
    { name: "First name", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 5 },
    { name: "First name", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 5 },
    { name: "First name", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 4 },
    { name: "First name", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 5 },
    { name: "First name", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 5 },
    { name: "First name", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 5 },
    { name: "First name", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 3 },
    { name: "First name", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 5 },
];

export default function ReviewMarquee() {
    const topRow = reviews.slice(0, 5);
    const bottomRow = reviews.slice(5, 10);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", overflow: "hidden" }}>
            <style>{`
                @keyframes scrollLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scrollRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
            `}</style>

            {/* Top row — scrolls left */}
            <div style={{ overflow: "hidden", width: "100%" }}>
                <div
                    style={{
                        display: "flex",
                        gap: "16px",
                        width: "max-content",
                        animation: "scrollLeft 60s linear infinite",
                    }}
                >
                    {[...topRow, ...topRow, ...topRow, ...topRow].map((r, i) => (
                        <div key={i} style={{ minWidth: "324px", maxWidth: "324px" }}>
                            <ReviewCard {...r} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom row — scrolls right */}
            <div style={{ overflow: "hidden", width: "100%" }}>
                <div
                    style={{
                        display: "flex",
                        gap: "16px",
                        width: "max-content",
                        animation: "scrollRight 60s linear infinite",
                    }}
                >
                    {[...bottomRow, ...bottomRow, ...bottomRow, ...bottomRow].map((r, i) => (
                        <div key={i} style={{ minWidth: "324px", maxWidth: "324px" }}>
                            <ReviewCard {...r} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
