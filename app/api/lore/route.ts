import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/connection";
import Lore from "@/lib/db/models/lores";
import { verifyToken } from "@/lib/server/auth";
import mongoose from "mongoose";

/*
 * GET /api/lore
 */

export async function GET() {
  await connectDB();
  const data = await Lore.find();
  if (!data || data.length == 0) {
    return NextResponse.json([], { status: 200 });
  }
  return NextResponse.json(data, { status: 200 });
}

export async function POST(request: NextRequest) {
  await connectDB();
  
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
  
  try {
    const lore = await Lore.create({
      title: body.title,
      date: body.date,
      location: body.location,
      preview: body.preview,
      story: body.story,
      images: body.images,
    });

    return NextResponse.json(
      { success: true, lore },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating lore:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create lore" },
      { status: 500 },
    );
  }
}

export async function PUT(request: NextRequest) {
  await connectDB();
  
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
  
  try {
    if (!mongoose.Types.ObjectId.isValid(body._id)) {
      return NextResponse.json(
        { success: false, error: "Invalid lore ID" },
        { status: 400 },
      );
    }

    const lore = await Lore.findByIdAndUpdate(
      body._id,
      {
        title: body.title,
        date: body.date,
        location: body.location,
        preview: body.preview,
        story: body.story,
        images: body.images,
      },
      { new: true },
    );

    if (!lore) {
      return NextResponse.json(
        { success: false, error: "Lore not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { success: true, lore },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error updating lore:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update lore" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest) {
  await connectDB();
  
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

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { success: false, error: "Invalid lore ID" },
      { status: 400 },
    );
  }

  try {
    const lore = await Lore.findByIdAndDelete(id);

    if (!lore) {
      return NextResponse.json(
        { success: false, error: "Lore not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting lore:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete lore" },
      { status: 500 },
    );
  }
}
