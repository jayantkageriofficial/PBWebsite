"use client";

import EventCard from "@/components/EventCard";

interface EventItem {
    title: string;
    description: string;
    image?: string;
}

interface EventsSectionProps {
    title: string;
    events: EventItem[];
    flippedId: string | null;
    onToggle: (id: string) => void;
}

export default function EventsSection({ title, events, flippedId, onToggle }: EventsSectionProps) {
    return (
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
                    {title}
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                    {events.map((ev, i) => {
                        const id = `${title}-${i}`;
                        return (
                            <EventCard 
                                key={id} 
                                title={ev.title} 
                                description={ev.description} 
                                image={ev.image} 
                                isFlipped={flippedId === id}
                                onToggle={() => onToggle(id)}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
