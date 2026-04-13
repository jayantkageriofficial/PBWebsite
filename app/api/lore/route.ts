import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/server/auth";
import LoreType from "@/types/lore/loreType";
import {
  deleteLore,
  getAllLores,
  getLoreById,
  updateLore,
  uploadLore,
} from "@/lib/server/lore";
import connectDB from "@/lib/db/connection";

/*
 * GET /api/lore
 */
export async function GET() {
  await connectDB()
  const data = await getAllLores();
  return NextResponse.json(data, { status: 200 });
}

/*
 * POST /api/lore
 */
export async function POST(request: NextRequest) {
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
  const { title, date, location, preview, story, images }: Partial<LoreType> =
    body;

  if (
    !title ||
    !date ||
    !location ||
    !preview ||
    !story?.length ||
    !images?.length
  ) {
    return NextResponse.json(
      { success: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  const newLore = await uploadLore({
    title,
    date,
    location,
    preview,
    story,
    images,
  });
  if (!newLore) return NextResponse.json({ success: false }, { status: 500 });

  console.log(`[lore] created by ${admin.email}: ${title}`);
  return NextResponse.json({ success: true, lore: newLore }, { status: 201 });
}

/*
 * PUT /api/lore
 */
export async function PUT(request: NextRequest) {
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
  const {
    _id,
    title,
    date,
    location,
    preview,
    story,
    images,
  }: Partial<LoreType> = body;

  if (
    !_id ||
    !title ||
    !date ||
    !location ||
    !preview ||
    !story?.length ||
    !images?.length
  ) {
    return NextResponse.json(
      { success: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  const existing = await getLoreById(_id);
  if (!existing)
    return NextResponse.json(
      { success: false, error: "Lore not found" },
      { status: 404 },
    );

  const updatedLore = await updateLore({
    _id,
    title,
    date,
    location,
    preview,
    story,
    images,
  });
  if (!updatedLore)
    return NextResponse.json({ success: false }, { status: 500 });

  console.log(`[lore] updated by ${admin.email}: ${title}`);
  return NextResponse.json({ success: true, lore: updatedLore });
}

/*
 * DELETE /api/lore
 */
export async function DELETE(request: NextRequest) {
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

  const existing = await getLoreById(id);
  if (!existing)
    return NextResponse.json(
      { success: false, error: "Lore not found" },
      { status: 404 },
    );

  const deleted = await deleteLore(id);
  if (!deleted)
    return NextResponse.json(
      { success: false, error: "Failed to delete lore" },
      { status: 500 },
    );

  console.log(`[lore] deleted by ${admin.email}: ${id}`);
  return NextResponse.json({ success: true });
}
