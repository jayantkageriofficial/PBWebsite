import { NextResponse } from "next/server";
import {
  getAllTalks,
  getTalkById,
  createTalk,
  updateTalk,
  deleteTalk,
} from "@/lib/server/talks";
import { createLog } from "@/lib/server/logs";
import { type Talk } from "@/lib/db/models/talks";
import { verifyToken } from "@/lib/server/auth";
import connectDB from "@/lib/db/connection";

/*
 * GET /api/talks
 *   searchParams: { id?: string }
 */
export async function GET(request: Request) {
  await connectDB()
  const { searchParams } = new URL(request.url);

  if (searchParams.has("id")) {
    const id = searchParams.get("id")!;
    const talk = await getTalkById(id);
    if (!talk)
      return NextResponse.json(
        { success: false, error: "Talk not found" },
        { status: 404 },
      );
    return NextResponse.json({ success: true, talk });
  }

  const talks = await getAllTalks();
  return NextResponse.json({ success: true, talks });
}

/*
 * POST /api/talks
 *   Header
 *     { Authorization: "Bearer <token>" }
 *   Body { Talk }
 */
export async function POST(request: Request) {
  await connectDB()
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
  const { title, description, images, type, name, date, speakers, speakerLinkedins, link }: Talk = body;

  if (
    !title ||
    !description ||
    !images ||
    !images.length ||
    !type ||
    !name ||
    !date ||
    !speakers
  )
    return NextResponse.json(
      { success: false, error: "Missing required fields" },
      { status: 400 },
    );

  const newTalk = await createTalk({
    title,
    description,
    images,
    type,
    name,
    date,
    speakers,
    speakerLinkedins,
    link,
  });

  await createLog({
    action: "CREATE",
    module: "talks",
    email: admin.email,
    title: `Created talk ${title}`,
  });

  return NextResponse.json({ success: true, talk: newTalk });
}

/*
 * PUT /api/talks
 *   Header
 *     { Authorization: "Bearer <token>" }
 *   Body { Talk & { _id: string } }
 */
export async function PUT(request: Request) {
  await connectDB()
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
  const { _id, title, description, images, type, name, date, speakers }: Talk =
    body;

  if (!_id)
    return NextResponse.json(
      { success: false, error: "Missing required field: _id" },
      { status: 400 },
    );

  if (
    !title ||
    !description ||
    !Array.isArray(images) ||
    !images.length ||
    !type ||
    !name ||
    !date ||
    !speakers
  )
    return NextResponse.json(
      { success: false, error: "Missing required fields" },
      { status: 400 },
    );

  const existing = await getTalkById(_id as unknown as string);
  if (!existing)
    return NextResponse.json(
      { success: false, error: "Talk not found" },
      { status: 404 },
    );

  const updatedTalk = await updateTalk({ ...body });

  await createLog({
    action: "UPDATE",
    module: "talks",
    email: admin.email,
    title: `Updated talk ${title}`,
  });

  return NextResponse.json({ success: true, talk: updatedTalk });
}

/*
 * DELETE /api/talks
 *   Header
 *     { Authorization: "Bearer <token>" }
 *   searchParams: { id: string }
 */
export async function DELETE(request: Request) {
  await connectDB()
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

  const existing = await getTalkById(id);
  if (!existing)
    return NextResponse.json(
      { success: false, error: "Talk not found" },
      { status: 404 },
    );

  const deleted = await deleteTalk(id);
  if (!deleted)
    return NextResponse.json(
      { success: false, error: "Failed to delete talk" },
      { status: 500 },
    );

  await createLog({
    action: "DELETE",
    module: "talks",
    email: admin.email,
    title: `Deleted talk ${existing.title}`,
  });

  return NextResponse.json({ success: true });
}
