import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/operations/auth";
import { getLogs } from "@/lib/operations/logs";
import LogsViewer from "@/components/LogsViewer";

export const metadata = {
  title: "Activity Logs - Point Blank Admin",
};

export default async function AdminLogsPage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session");

  if (!sessionCookie || !(await verifyToken(sessionCookie.value))) {
    redirect("/admin");
  }

  const logs = await getLogs();

  return <LogsViewer initialLogs={logs} />;
}
