import connectDB from "@/lib/db/connection";
import EventModel from "@/lib/db/models/events";

export async function getEvents() {
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

    return {
        upcomingEvents: upcomingEventsData.map(mapEvent),
        pastEvents: pastEventsData.map(mapEvent)
    };
}
