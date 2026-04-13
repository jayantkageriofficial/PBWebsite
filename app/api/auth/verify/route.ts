import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/server/auth";
import connectDB from "@/lib/db/connection";

/*
 * GET /api/auth/verify
 *   searchParams: { token: string }
 */
export async function GET(request: Request) {
  await connectDB()
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  if (!token)
    return NextResponse.json(
      { success: false, error: "Token is required" },
      { status: 401 },
    );

  const user = await verifyToken(token);
  if (!user?.email)
    return NextResponse.json(
      { success: false, error: "Invalid or expired token" },
      { status: 401 },
    );

  return NextResponse.json({ success: true, user });
}
