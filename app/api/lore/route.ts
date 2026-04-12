import { NextResponse } from "next/server";
import Lore from "@/lib/db/models/lores";

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
