"use client";

import { useState } from "react";
import EventsSection from "@/components/EventsSection";
import type { EventItem } from "@/components/EventsSection";

export default function EventsWrapper({ upcomingEvents, pastEvents }: { upcomingEvents: EventItem[], pastEvents: EventItem[] }) {
    const [flippedId, setFlippedId] = useState<string | null>(null);

    const handleToggle = (id: string) => {
        setFlippedId(prev => prev === id ? null : id);
    };

    return (
        <>
            <EventsSection title="Upcoming Events" events={upcomingEvents} flippedId={flippedId} onToggle={handleToggle} />
            <EventsSection title="Past Events" events={pastEvents} flippedId={flippedId} onToggle={handleToggle} />
        </>
    );
}
