import { NextResponse } from "next/server";
import { getLogs, LogModule } from "@/lib/server/logs";
import { verifyToken } from "@/lib/server/auth";
import connectDB from "@/lib/db/connection";


/*
 * GET /api/logs
 *   searchParams: { module?: string }
 *   Header: { Authorization: "Bearer <token>" }
 */
export async function GET(request: Request) {
  await connectDB()
  const { searchParams } = new URL(request.url);
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

  const logModule = (searchParams.get("module") as LogModule) || null;
  const logs = await getLogs(logModule!);

  return NextResponse.json({ success: true, logs });
}
