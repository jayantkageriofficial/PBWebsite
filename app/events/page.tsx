import ReviewMarquee from "@/components/ReviewMarquee";
import EventsWrapper from "@/components/EventsWrapper";
import connectDB from "@/lib/db/connection";
import EventModel from "@/lib/db/models/events";

export default async function EventsPage() {
    await connectDB();
    const events = await EventModel.find({}).lean();

    const now = new Date();
    
    const upcomingEventsData = events.filter((event) => {
        const eventDate = new Date(event.eventDate);
        return isNaN(eventDate.getTime()) || eventDate >= now;
    });

    const pastEventsData = events.filter((event) => {
        const eventDate = new Date(event.eventDate);
        return !isNaN(eventDate.getTime()) && eventDate < now;
    });

    const mapEvent = (ev: any) => ({
      title: ev.eventName,
      description: ev.description,
      image: ev.imageURL,
      date: ev.eventDate,
      location: "Bangalore, Karnataka",
      registrationLink: ev.registrationLink || "",
    });

    const upcomingEvents = upcomingEventsData.map(mapEvent);
    const pastEvents = pastEventsData.map(mapEvent);

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