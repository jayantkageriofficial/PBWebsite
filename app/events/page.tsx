import ReviewMarquee from "@/components/ReviewMarquee";
import EventsWrapper from "@/components/EventsWrapper";
import { upcomingEvents, pastEvents } from "@/components/eventsData";

export default async function EventsPage() {
    return (
        <>
            <section className="relative min-h-[30vh] overflow-hidden bg-black text-white flex items-center justify-center">
                <div className="relative z-10 flex flex-col items-center justify-center py-20">
                    <h1 className="text-center text-white tracking-tight select-none text-5xl md:text-6xl lg:text-7xl font-normal leading-tight md:leading-snug">
                        Events
                    </h1>
                </div>
            </section>
            <EventsWrapper upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
            <section className="bg-black text-white py-14 overflow-hidden">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal leading-tight md:leading-snug text-white mb-8 text-center px-6">
                    Events experience
                </h2>
                <ReviewMarquee />
            </section>
        </>
    );
}