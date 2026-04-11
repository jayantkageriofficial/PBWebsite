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
        <section className="bg-black text-white py-14 px-6">
            <div className="max-w-[1240px] mx-auto">
                <h2 className="font-['Lexend',sans-serif] text-[38px] font-normal leading-[1.5] tracking-normal text-white mb-8">
                    {title}
                </h2>
                <div className="grid grid-cols-3 gap-5">
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
