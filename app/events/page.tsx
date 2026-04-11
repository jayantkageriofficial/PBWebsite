"use client";

import { useState } from "react";

import ReviewMarquee from "@/components/ReviewMarquee";
import EventsSection from "@/components/EventsSection";
import { upcomingEvents, pastEvents } from "@/components/eventsData";



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

            <EventsSection title="Upcoming Events" events={upcomingEvents} flippedId={flippedId} onToggle={handleToggle} />
            <EventsSection title="Past Events" events={pastEvents} flippedId={flippedId} onToggle={handleToggle} />

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