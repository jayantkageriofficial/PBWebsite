"use server";

import Log from "@/lib/db/models/logs";

export type LogModule =
  | "events"
  | "members"
  | "lore"
  | "talks"
  | "achievements";
export type LogAction = "CREATE" | "UPDATE" | "DELETE";

export interface LogEntry {
  _id: string;
  timestamp: string;
  module: LogModule;
  email: string;
  action: LogAction;
  title: string;
}

export async function createLog(params: {
  module: LogModule;
  email: string;
  action: LogAction;
  title?: string;
}) {
  await Log.create({
    timestamp: new Date(),
    module: params.module,
    email: params.email,
    action: params.action,
    title: params.title || "",
  });
}

export async function getLogs(module?: LogModule): Promise<LogEntry[]> {
  type RawLog = { _id: { toString(): string }; timestamp: Date; module: string; email: string; action: string; title?: string };
  const filter = module ? { module } : {};
  const logs = await Log.find(filter).sort({ timestamp: -1 }).lean();
  return (logs as RawLog[]).map((log) => ({
    _id: log._id.toString(),
    timestamp: (log.timestamp as Date).toISOString(),
    module: log.module as LogModule,
    email: log.email as string,
    action: log.action as LogAction,
    title: (log.title as string) || "",
  }));
}

export async function exportLogs(module?: LogModule): Promise<string> {
  const logs = await getLogs(module);
  const rows = [
    "Timestamp,Module,Email,Action,Title",
    ...logs.map(
      (log) =>
        `"${new Date(log.timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}","${log.module}","${log.email}","${log.action}","${log.title.replace(/"/g, '""')}"`,
    ),
  ];
  return rows.join("\n");
}
