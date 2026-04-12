import { NextResponse } from "next/server";
import { sendVerificationEmail, verifyToken } from "@/lib/server/auth";

/*
 * GET /api/auth/login
 *   searchParams: { email: string }
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  if (!email)
    return NextResponse.json(
      { success: false, error: "Email is required" },
      { status: 401 },
    );

  await sendVerificationEmail(email);
  return NextResponse.json({ success: true });
}
