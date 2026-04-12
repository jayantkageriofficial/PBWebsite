import { NextResponse } from "next/server";
import connectDB from "@/lib/db/connection";
import EventModel from "@/lib/db/models/events";

export async function GET() {
  try {
    await connectDB();
    const events = await EventModel.find({}).lean();

    const now = new Date();
    // Categorize events based on eventDate parsed
    const upcomingEvents = events.filter((event) => {
        const eventDate = new Date(event.eventDate);
        return isNaN(eventDate.getTime()) || eventDate >= now;
    });

    const pastEvents = events.filter((event) => {
        const eventDate = new Date(event.eventDate);
        return !isNaN(eventDate.getTime()) && eventDate < now;
    });

    // We send everything down in mapped format to match frontend schema
    const mapEvent = (ev: any) => ({
      title: ev.eventName,
      description: ev.description,
      image: ev.imageURL,
      date: ev.eventDate,
      location: ev.location || "TBA",
      registrationLink: ev.registrationLink || "",
    });

    return NextResponse.json({
        upcomingEvents: upcomingEvents.map(mapEvent),
        pastEvents: pastEvents.map(mapEvent)
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
  }
}
