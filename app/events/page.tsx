"use client";

import { Lexend_Tera } from "next/font/google";
import ThreeBackground from "@/components/ThreeBackground";
import { Star } from "lucide-react";
import { useRef, useState } from "react";

const lexendTera = Lexend_Tera({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const upcomingEvents = [
    { title: "PBCTF 5.0", description: "Jeopardy Style CTF", image: "/images/cybersec.webp" },
    { title: "Zenith 2.0", description: "24 hr Hackathon", image: "/images/innovation.webp" },
];

const pastEvents = [
    { title: "Zenith", description: "While you're busy watching reels, some college kids are about to walk away with...", image: "/images/events/zenith.webp" },
    { title: "Recruitment Registration", description: "PB isn't just a club it's a league of arrogant elitists. We pride ourselves on being......", image: "/images/events/recruitment.webp" },
    { title: "IICT 2025", description: "PB isn't just a club it's a league of arrogant elitists. We pride ourselves on being......", image: "/images/events/iict.webp" },
    { title: "SIH Internal Round", description: "The wait is finally over! We're thrilled to announce our Internal Hackathon to......", image: "/images/events/sih.webp" },
    { title: "PBCTF 4.0", description: "Jeopardy Style CTF", image: "/images/cybersec.webp" },
    { title: "PB Hustle", description: "Weekly coding contests designed for coding enthusiasts.", image: "/images/hustle.webp" },
    { title: "PBCTF 3.0", description: "CTF Competition held by Point Blank!", image: "/images/cybersec.webp" },
    { title: "IICT 2024", description: "Innovations in Compiler Technology (ICT) is a workshop for compiler researchers......", image: "/images/events/iict.webp" },
    { title: "SIH Internal Round", description: "It's that time of the year. Are you and your team ready for the challenge?", image: "/images/sih.webp" },
    { title: "PBCTF 2.0", description: "Whether you're new to cybersecurity or looking to enhance your skills, PBCTF......", image: "/images/cybersec.webp" },
    { title: "PB CTF 1.0", description: "Join the Ultimate Cybersecurity Challenge: pbCTF 2023! Calling all aspiring......", image: "/images/cybersec.webp" },
    { title: "Advaith 2021", description: "Advaith 2021 is a tech extravaganza hosted by Point Blank and DSCE ACM......", image: "/images/connect.webp" },
];

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

function EventCard({ title, description, image }: { title: string; description: string; image?: string }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundColor: "#111",
                borderRadius: "20px",
                border: hovered ? "1px solid rgba(55,255,0,0.5)" : "1px solid transparent",
                padding: "9px 10px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                maxWidth: "396px",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                boxShadow: hovered
                    ? "0 0 15px rgba(55,255,0,0.25), 0 0 30px rgba(55,255,0,0.10), inset 0 0 15px rgba(55,255,0,0.05)"
                    : "none",
                cursor: "pointer",
            }}
        >
            {/* Image area */}
            <div
                style={{
                    borderRadius: "14px",
                    overflow: "hidden",
                    backgroundColor: "#222",
                    width: "100%",
                    aspectRatio: "4/3",
                    position: "relative",
                }}
            >
                {image && (
                    <img
                        src={image}
                        alt={title}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                )}
            </div>

            {/* Text */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "4px 6px 6px" }}>
                <span
                    style={{
                        fontFamily: "'Lexend', sans-serif",
                        fontSize: "28px",
                        fontWeight: 500,
                        lineHeight: "140%",
                        letterSpacing: "0%",
                        verticalAlign: "middle",
                        background: "linear-gradient(135deg, #37FF00, #37FF00)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    {title}
                </span>
                <span
                    style={{
                        fontFamily: "'Lexend', sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "140%",
                        letterSpacing: "0%",
                        color: "rgba(255,255,255,0.65)",
                    }}
                >
                    {description}
                </span>
            </div>
        </div>
    );
}

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className={`w-4 h-4 ${i < count ? "text-pbgreen fill-pbgreen" : "text-white/30"}`} />
            ))}
        </div>
    );
}

function ReviewCard({ name, review, rating }: { name: string; review: string; rating: number }) {
    return (
        <div
            style={{
                backgroundColor: "#111",
                borderRadius: "16px",
                border: "1px solid rgba(55,255,0,0.3)",
                padding: "20px 18px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
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

function ReviewMarquee() {
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
                        animation: "scrollLeft 30s linear infinite",
                    }}
                >
                    {[...topRow, ...topRow, ...topRow, ...topRow].map((r, i) => (
                        <div key={i} style={{ minWidth: "260px", maxWidth: "260px" }}>
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
                        animation: "scrollRight 30s linear infinite",
                    }}
                >
                    {[...bottomRow, ...bottomRow, ...bottomRow, ...bottomRow].map((r, i) => (
                        <div key={i} style={{ minWidth: "260px", maxWidth: "260px" }}>
                            <ReviewCard {...r} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function EventsPage() {
    return (
        <>
            <section className="relative min-h-[30vh] overflow-hidden text-white flex items-center justify-center">
                <ThreeBackground />
                <div className="relative z-10 flex flex-col items-center justify-center py-20">
                    <h1 className={`text-6xl sm:text-7xl text-center text-white tracking-tight select-none ${lexendTera.className}`}>
                        Events
                    </h1>
                </div>
            </section>

            <section style={{ backgroundColor: "black", color: "white", padding: "56px 24px" }}>
                <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
                    <h2
                        style={{
                            fontFamily: "'Lexend', sans-serif",
                            fontSize: "clamp(28px, 4vw, 40px)",
                            fontWeight: 500,
                            color: "#ffffff",
                            marginBottom: "32px",
                        }}
                    >
                        Upcoming Events
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                        {upcomingEvents.map((ev) => <EventCard key={ev.title} title={ev.title} description={ev.description} image={ev.image} />)}
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: "black", color: "white", padding: "56px 24px" }}>
                <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
                    <h2
                        style={{
                            fontFamily: "'Lexend', sans-serif",
                            fontSize: "clamp(28px, 4vw, 40px)",
                            fontWeight: 500,
                            color: "#ffffff",
                            marginBottom: "32px",
                        }}
                    >
                        Past Events
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                        {pastEvents.map((ev, i) => <EventCard key={i} title={ev.title} description={ev.description} image={ev.image} />)}
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: "black", color: "white", padding: "56px 24px", overflow: "hidden" }}>
                <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
                    <h2
                        style={{
                            fontFamily: "'Lexend', sans-serif",
                            fontSize: "clamp(28px, 4vw, 40px)",
                            fontWeight: 500,
                            color: "#ffffff",
                            marginBottom: "32px",
                            fontStyle: "italic",
                            textAlign: "center",
                        }}
                    >
                        Events experience
                    </h2>
                    <ReviewMarquee />
                </div>
            </section>
        </>
    );
}