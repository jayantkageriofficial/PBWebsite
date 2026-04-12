"use client";

import EventCard from "@/components/events/EventCard";

export interface EventItem {
  title: string;
  description: string;
  image?: string;
  date: string;
  location: string;
  registrationLink: string;
}

export interface EventItemWithId extends EventItem {
  _id?: string;
}

interface EventsSectionProps {
  title: string;
  events: EventItemWithId[];
  flippedId: string | null;
  onToggle: (id: string) => void;
  isAdmin?: boolean;
  onEdit?: (event: EventItemWithId) => void;
  onDelete?: (event: EventItemWithId) => void;
}

export default function EventsSection({
  title,
  events,
  flippedId,
  onToggle,
  isAdmin,
  onEdit,
  onDelete,
}: EventsSectionProps) {
  return (
    <section className="bg-pbpages text-white px-6 py-6">
      <div className="mx-auto max-w-310">
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
                isAdmin={isAdmin}
                onEdit={() => onEdit?.(ev)}
                onDelete={() => onDelete?.(ev)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
