import { NextResponse } from "next/server";
import { sendVerificationEmail } from "@/lib/server/auth";
import connectDB from "@/lib/db/connection";

/*
 * POST /api/auth/login
 *   body: { email: string }
 */
export async function POST(request: Request) {
  await connectDB();
  const { email } = await request.json();
  if (!email)
    return NextResponse.json(
      { success: false, error: "Email is required" },
      { status: 401 },
    );

  const res = await sendVerificationEmail(email);
  return NextResponse.json({ success: true, valid: res });
}
