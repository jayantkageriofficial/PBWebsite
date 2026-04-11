"use client";

import { useState } from "react";

import EventCard from "@/components/EventCard";
import ReviewMarquee from "@/components/ReviewMarquee";

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



export default function EventsPage() {
    const [flippedId, setFlippedId] = useState<string | null>(null);

    const handleToggle = (id: string) => {
        setFlippedId(prev => prev === id ? null : id);
    };

    return (
        <>
            <section className="relative min-h-[30vh] overflow-hidden bg-black text-white flex items-center justify-center">
                <div className="relative z-10 flex flex-col items-center justify-center py-20">
                    <h1
                        className="text-center text-white tracking-tight select-none"
                        style={{
                            fontFamily: "'Lexend', sans-serif",
                            fontSize: "64px",
                            fontWeight: 400,
                            lineHeight: "150%",
                            letterSpacing: "0%",
                        }}
                    >
                        Events
                    </h1>
                </div>
            </section>

            <section style={{ backgroundColor: "black", color: "white", padding: "56px 24px" }}>
                <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
                    <h2
                        style={{
                            fontFamily: "'Lexend', sans-serif",
                            fontSize: "38px",
                            fontWeight: 400,
                            lineHeight: "150%",
                            letterSpacing: "0%",
                            color: "#ffffff",
                            marginBottom: "32px",
                        }}
                    >
                        Upcoming Events
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                        {upcomingEvents.map((ev, i) => (
                            <EventCard 
                                key={`upcoming-${i}`} 
                                title={ev.title} 
                                description={ev.description} 
                                image={ev.image} 
                                isFlipped={flippedId === `upcoming-${i}`}
                                onToggle={() => handleToggle(`upcoming-${i}`)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: "black", color: "white", padding: "56px 24px" }}>
                <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
                    <h2
                        style={{
                            fontFamily: "'Lexend', sans-serif",
                            fontSize: "38px",
                            fontWeight: 400,
                            lineHeight: "150%",
                            letterSpacing: "0%",
                            color: "#ffffff",
                            marginBottom: "32px",
                        }}
                    >
                        Past Events
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                        {pastEvents.map((ev, i) => (
                            <EventCard 
                                key={`past-${i}`} 
                                title={ev.title} 
                                description={ev.description} 
                                image={ev.image} 
                                isFlipped={flippedId === `past-${i}`}
                                onToggle={() => handleToggle(`past-${i}`)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: "black", color: "white", paddingTop: "56px", paddingBottom: "56px", overflow: "hidden" }}>
                <h2
                    style={{
                        fontFamily: "'Lexend', sans-serif",
                        fontSize: "64px",
                        fontWeight: 400,
                        lineHeight: "150%",
                        letterSpacing: "0%",
                        color: "#ffffff",
                        marginBottom: "32px",
                        textAlign: "center",
                        padding: "0 24px",
                    }}
                >
                    Events experience
                </h2>
                <ReviewMarquee />
            </section>
        </>
    );
}