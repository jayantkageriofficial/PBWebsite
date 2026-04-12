import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/connection";
import Lore from "@/lib/db/models/lores";

/*
 * GET /api/lore
 */
connectDB();

export async function GET() {
  const data = await Lore.find();
  console.log(data);
  if (!data) {
    return;
  }
  return NextResponse.json({ statusL: "ALL FETCHED" }, { status: 200 });
}
