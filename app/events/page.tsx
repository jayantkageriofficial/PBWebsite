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
    { name: "Last name", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud", rating: 0 },
    { name: "First name", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolori n reprehenderit in voluptate", rating: 0 },
    { name: "Your name", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud", rating: 0 },
    { name: "Reviewer", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 0 },
];

function EventCard({ title, description, image }: { title: string; description: string; image?: string }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundColor: "#1a1a1a",
                borderRadius: "20px",
                border: hovered ? "1px solid rgba(55,255,0,0.5)" : "1px solid rgba(255,255,255,0.18)",
                padding: "9px 10px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
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
                    backgroundColor: "#3a3a3a",
                    border: "1px solid rgba(255,255,255,0.10)",
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
                        fontFamily: "'Clash Display Variable', 'Clash Display', sans-serif",
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
                        fontFamily: "'Clash Display Variable', 'Clash Display', sans-serif",
                        fontSize: "17px",
                        fontWeight: 500,
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
                <Star key={i} className={`w-3.5 h-3.5 ${i < count ? "text-pbgreen fill-pbgreen" : "text-white/30"}`} />
            ))}
        </div>
    );
}

function ReviewCard({ name, review, rating }: { name: string; review: string; rating: number }) {
    return (
        <div
            style={{
                backgroundColor: "#2a2a2a",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.18)",
                padding: "20px 18px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                minWidth: "240px",
                maxWidth: "260px",
                flexShrink: 0,
            }}
        >
            <StarRating count={rating} />
            <p
                style={{
                    fontFamily: "'Clash Display Variable', 'Clash Display', sans-serif",
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
                    fontFamily: "'Clash Display Variable', 'Clash Display', sans-serif",
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

function ReviewCarousel() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    return (
        <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: "none" }}
            onMouseDown={(e) => { setIsDragging(true); setStartX(e.pageX - (trackRef.current?.offsetLeft ?? 0)); setScrollLeft(trackRef.current?.scrollLeft ?? 0); }}
            onMouseLeave={() => setIsDragging(false)}
            onMouseUp={() => setIsDragging(false)}
            onMouseMove={(e) => { if (!isDragging) return; e.preventDefault(); const x = e.pageX - (trackRef.current?.offsetLeft ?? 0); if (trackRef.current) trackRef.current.scrollLeft = scrollLeft - (x - startX) * 1.5; }}
        >
            {[...reviews, ...reviews].map((r, i) => <ReviewCard key={i} {...r} />)}
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

            <section className="bg-black text-white py-14 px-6 sm:px-10 lg:px-20">
                <h2
                    style={{
                        fontFamily: "'Clash Display Variable', 'Clash Display', sans-serif",
                        fontSize: "clamp(28px, 4vw, 40px)",
                        fontWeight: 500,
                        color: "#ffffff",
                        marginBottom: "32px",
                    }}
                >
                    Upcoming Events
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {upcomingEvents.map((ev) => <EventCard key={ev.title} title={ev.title} description={ev.description} image={ev.image} />)}
                </div>
            </section>

            <section className="bg-black text-white py-14 px-6 sm:px-10 lg:px-20">
                <h2
                    style={{
                        fontFamily: "'Clash Display Variable', 'Clash Display', sans-serif",
                        fontSize: "clamp(28px, 4vw, 40px)",
                        fontWeight: 500,
                        color: "#ffffff",
                        marginBottom: "32px",
                    }}
                >
                    Past Events
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pastEvents.map((ev, i) => <EventCard key={i} title={ev.title} description={ev.description} image={ev.image} />)}
                </div>
            </section>

            <section className="bg-black text-white py-14 px-6 sm:px-10 lg:px-20 overflow-hidden">
                <h2
                    style={{
                        fontFamily: "'Clash Display Variable', 'Clash Display', sans-serif",
                        fontSize: "clamp(28px, 4vw, 40px)",
                        fontWeight: 500,
                        color: "#ffffff",
                        marginBottom: "32px",
                    }}
                >
                    Events experience
                </h2>
                <ReviewCarousel />
            </section>
        </>
    );
}