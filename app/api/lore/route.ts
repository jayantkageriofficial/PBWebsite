import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/connection";
import Lore from "@/lib/db/models/lores";
import { verifyToken } from "@/lib/server/auth";
import LoreType from "@/types/lore/loreType";
import { deleteLore, getLoreById, updateLore, uploadLore } from "@/lib/server/lore";

/*
 * GET /api/lore
 */

export async function GET() {
  const data = await Lore.find();
  if (!data || data.length == 0) {
    return NextResponse.json([], { status: 200 });
  }
  return NextResponse.json(data, { status: 200 });
}

/*
 * POST /api/lore
 */

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];
  if (!token)
    return NextResponse.json(
      { success: true, error: "Unauthorized" },
      { status: 401 },
    );

  const admin = await verifyToken(token);
  if (!admin?.email)
    return NextResponse.json(
      { success: true, error: "Unauthorized" },
      { status: 401 },
    );

  const body = await request.json();
  const { title, date, location, preview, story, images }: LoreType = body;
  if (!title || !date || !location || !preview || !story || !images) {
    return NextResponse.json(
      { success: false, error: "Missing required fields" },
      { status: 400 },
    );
  }
  const newLore = await uploadLore({
    ...body,
  });
  if (newLore == null) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
  return NextResponse.json({ success: true, member: newLore });
}

/*
 * PUT /api/lore
 */

export async function PUT(request: NextRequest) {
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
  const { _id, title, date, location, preview, story }: LoreType = body;

  if (!title || !date || !location || !preview || !story) {
    return NextResponse.json(
      { success: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  const existing = await getLoreById(_id);
  if (!existing) {
    return NextResponse.json(
      { success: false, error: "Lore not found" },
      { status: 404 },
    );
  }
  const updatedLore = await updateLore({ ...body });

  return NextResponse.json({ success: true, member: updateLore });
}

/*
 * DELETE /api/lore
 */

export async function DELETE(request: NextRequest) {
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

  if (!id){
    return NextResponse.json(
      { success: false, error: "Missing required query param: id" },
      { status: 400 },
    );
  }
  const existing = await getLoreById(id)
  if (!existing){
    return NextResponse.json(
      { success: false, error: "Lore not found" },
      { status: 404 },
    );
  }
  const deleted = await deleteLore(id);
  if (!deleted){
    return NextResponse.json(
      { success: false, error: "Failed to delete member" },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
