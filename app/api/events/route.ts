import { NextResponse } from "next/server";
import {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} from "@/lib/server/events";
import { createLog } from "@/lib/server/logs";
import { type Events } from "@/lib/db/models/events";
import { verifyToken } from "@/lib/server/auth";

/*
 * GET /api/events
 *   searchParams: { id?: string }
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  if (searchParams.has("id")) {
    const id = searchParams.get("id")!;
    const event = await getEventById(id);
    if (!event)
      return NextResponse.json(
        { success: false, error: "Event not found" },
        { status: 404 },
      );
    return NextResponse.json({ success: true, event });
  }

  const events = await getAllEvents();
  return NextResponse.json({ success: true, events });
}

/*
 * POST /api/events
 *   Header
 *     { Authorization: "Bearer <token>" }
 *   Body { Events }
 */
export async function POST(request: Request) {
  const authHeader = request.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];
  if (!token)
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 },
    );

  const admin = await verifyToken(token);
  if (!admin?.email)
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 },
    );

  const body = await request.json();

  const {
    eventName,
    description,
    eventDate,
    lastDateOfRegistration,
    imageURL,
    registrationLink,
  }: Events = body;

  if (
    !eventName ||
    !description ||
    !eventDate ||
    !lastDateOfRegistration ||
    !imageURL ||
    !registrationLink
  )
    return NextResponse.json(
      { success: false, error: "Missing required fields" },
      { status: 400 },
    );

  const newEvent = await createEvent({ ...body });

  await createLog({
    action: "CREATE",
    module: "events",
    email: admin.email,
    title: `Created event ${eventName}`,
  });

  return NextResponse.json({ success: true, event: newEvent });
}

/*
 * PUT /api/events
 *   Header
 *     { Authorization: "Bearer <token>" }
 *   Body { Events }
 */
export async function PUT(request: Request) {
  const authHeader = request.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];
  if (!token)
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 },
    );

  const admin = await verifyToken(token);
  if (!admin?.email)
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 },
    );

  const body = await request.json();
  const {
    _id,
    eventName,
    description,
    eventDate,
    lastDateOfRegistration,
    imageURL,
    registrationLink,
  }: Events & { _id: string } = body;

  if (!_id)
    return NextResponse.json(
      { success: false, error: "Missing required field: _id" },
      { status: 400 },
    );

  if (
    !eventName ||
    !description ||
    !eventDate ||
    !lastDateOfRegistration ||
    !imageURL ||
    !registrationLink
  )
    return NextResponse.json(
      { success: false, error: "Missing required fields" },
      { status: 400 },
    );

  const existing = await getEventById(_id);
  if (!existing)
    return NextResponse.json(
      { success: false, error: "Event not found" },
      { status: 404 },
    );

  const updatedEvent = await updateEvent({ ...body });

  await createLog({
    action: "UPDATE",
    module: "events",
    email: admin.email,
    title: `Updated event ${eventName}`,
  });

  return NextResponse.json({ success: true, event: updatedEvent });
}

/*
 * DELETE /api/events
 *   Header
 *     { Authorization: "Bearer <token>" }
 *   searchParams: { id: string }
 */
export async function DELETE(request: Request) {
  const authHeader = request.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];
  if (!token)
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 },
    );

  const admin = await verifyToken(token);
  if (!admin?.email)
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 },
    );

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id)
    return NextResponse.json(
      { success: false, error: "Missing required query param: id" },
      { status: 400 },
    );

  const existing = await getEventById(id);
  if (!existing)
    return NextResponse.json(
      { success: false, error: "Event not found" },
      { status: 404 },
    );

  const deleted = await deleteEvent(id);
  if (!deleted)
    return NextResponse.json(
      { success: false, error: "Failed to delete event" },
      { status: 500 },
    );

  await createLog({
    action: "DELETE",
    module: "events",
    email: admin.email,
    title: `Deleted event ${existing.eventName}`,
  });

  return NextResponse.json({ success: true });
}
