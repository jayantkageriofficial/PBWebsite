import { NextResponse } from "next/server";
import { sendVerificationEmail, verifyToken } from "@/lib/server/auth";

/*
 * POST /api/auth/login
 *   body: { email: string }
 */
export async function POST(request: Request) {
  const { email } = await request.json();
  if (!email)
    return NextResponse.json(
      { success: false, error: "Email is required" },
      { status: 401 },
    );

  await sendVerificationEmail(email);
  return NextResponse.json({ success: true });
}
