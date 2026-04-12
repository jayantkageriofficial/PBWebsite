"use client";

import EventCard from "@/components/EventCard";

export interface EventItem {
    title: string;
    description: string;
    image?: string;
    date: string;
    location: string;
    registrationLink: string;
}

interface EventsSectionProps {
    title: string;
    events: EventItem[];
    flippedId: string | null;
    onToggle: (id: string) => void;
}

export default function EventsSection({ title, events, flippedId, onToggle }: EventsSectionProps) {
    return (
        <section className="bg-pbpages text-white px-6 py-14">
            <div className="mx-auto max-w-[1240px]">
                <h2 className="mb-8 text-3xl md:text-4xl font-normal leading-snug text-white">
                    {title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {events.map((ev, i) => {
                        const id = `${title}-${i}`;
                        return (
                            <EventCard 
                                key={id} 
                                title={ev.title} 
                                description={ev.description} 
                                image={ev.image} 
                                date={ev.date}
                                location={ev.location}
                                registrationLink={ev.registrationLink}
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
