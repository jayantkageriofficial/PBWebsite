import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/connection";
import Lore from "@/lib/db/models/lores";
import { verifyToken } from "@/lib/server/auth";

/*
 * GET /api/lore
 */

export async function GET() {
  connectDB();
  const data = await Lore.find();
  if (!data || data.length == 0) {
    return NextResponse.json([], { status: 200 });
  }
  return NextResponse.json(data, { status: 200 });
}

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
}
