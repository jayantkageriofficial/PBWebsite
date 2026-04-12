import { NextResponse } from "next/server";
import { getLogs, LogModule } from "@/lib/server/logs";
import { verifyToken } from "@/lib/server/auth";

/*
 * GET /api/logs
 *   searchParams: { module?: string }
 *   Header: { Authorization: "Bearer <token>" }
 */
export async function GET(request: Request) {
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

  const module = (searchParams.get("module") as LogModule) || null;
  const logs = await getLogs(module!);

  return NextResponse.json({ success: true, logs });
}
