import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogsViewer from "@/components/LogsViewer";
import verifyAuth from "@/lib/verifyAuth";

export const metadata = {
  title: "Activity Logs - Point Blank Admin",
};

export default async function AdminLogsPage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session");

  console.log("Session cookie:", sessionCookie);

  if (!sessionCookie || !(await verifyAuth(sessionCookie.value))) {
    redirect("/admin");
  }

  const req = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/logs`, {
    headers: {
      Authorization: `Bearer ${sessionCookie.value}`,
    },
  });

  console.log("Fetch logs response:", req);

  if (!req.ok) {
    console.error("Failed to fetch logs:", req.statusText);
    return <div className="text-red-500">Failed to load logs.</div>;
  }

  const { logs } = await req.json();

  return <LogsViewer initialLogs={logs} />;
}
