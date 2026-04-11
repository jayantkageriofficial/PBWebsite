"use client";

import { useState } from "react";
import { exportLogs } from "@/lib/operations/logs";
import type { LogEntry, LogModule, LogAction } from "@/lib/operations/logs";

const TABS = [
  "all",
  "events",
  "members",
  "lore",
  "talks",
  "achievements",
] as const;
type Tab = (typeof TABS)[number];

const MODULE_BADGE: Record<LogModule, string> = {
  events: "bg-pbgreen/10 text-pbgreen border border-pbgreen/20",
  members: "bg-white/10 text-white/80 border border-white/10",
  lore: "bg-white/5 text-white/60 border border-white/10",
  talks: "bg-pbgreen/5 text-pbgreen/70 border border-pbgreen/15",
  achievements: "bg-white/10 text-white/70 border border-white/10",
};

const ACTION_COLOR: Record<LogAction, string> = {
  CREATE: "text-pbgreen",
  UPDATE: "text-yellow-400",
  DELETE: "text-red-400",
};

function formatTs(iso: string) {
  return new Date(iso).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

export default function LogsViewer({
  initialLogs,
}: {
  initialLogs: LogEntry[];
}) {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [exporting, setExporting] = useState(false);

  const filtered =
    activeTab === "all"
      ? initialLogs
      : initialLogs.filter((l) => l.module === activeTab);

  const countFor = (tab: Tab) =>
    tab === "all"
      ? initialLogs.length
      : initialLogs.filter((l) => l.module === tab).length;

  const handleExport = async () => {
    setExporting(true);
    try {
      const csv = await exportLogs(activeTab === "all" ? undefined : activeTab);
      const blob = new Blob([csv], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `logs-${activeTab}-${new Date().toISOString().split("T")[0]}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-5 py-8 md:px-10 md:py-12">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-pbgray rounded-4xl px-8 py-6">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Activity Logs
            </h1>
            <p className="text-sm text-white/40 mt-0.5">
              {`${initialLogs.length} entries \u00B7 retained for 60 days`}
            </p>
          </div>
          <button
            onClick={handleExport}
            disabled={exporting || filtered.length === 0}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-3xl bg-pbgreen text-black font-medium text-sm hover:bg-pbgreen/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            {exporting ? "Exporting…" : "Export CSV"}
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-1 p-1.5 bg-pbgray rounded-4xl w-fit">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-3xl text-sm font-medium capitalize transition-all ${
                activeTab === tab
                  ? "bg-pbgreen text-black"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab === "all" ? "All Logs" : tab}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full tabular-nums transition-colors ${
                  activeTab === tab
                    ? "bg-black/20 text-black/70"
                    : "bg-white/5 text-white/40"
                }`}
              >
                {countFor(tab)}
              </span>
            </button>
          ))}
        </div>

        {/* Log table */}
        <div className="rounded-4xl border border-white/5 bg-pbgray overflow-hidden">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-white/20 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="text-sm">No logs for this module</span>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/5 text-left text-white/30 uppercase tracking-wider text-[11px]">
                    <th className="px-6 py-4 font-medium">Timestamp</th>
                    <th className="px-6 py-4 font-medium">Module</th>
                    <th className="px-6 py-4 font-medium">Email</th>
                    <th className="px-6 py-4 font-medium">Action</th>
                    <th className="px-6 py-4 font-medium">Title / ID</th>
                  </tr>
                </thead>
                <tbody className="font-mono divide-y divide-white/4">
                  {filtered.map((log) => (
                    <tr
                      key={log._id}
                      className="hover:bg-white/3 transition-colors"
                    >
                      <td className="px-6 py-3 text-white/30 whitespace-nowrap">
                        {formatTs(log.timestamp)}
                      </td>
                      <td className="px-6 py-3">
                        <span
                          className={`px-2 py-0.5 rounded text-[11px] font-semibold uppercase ${MODULE_BADGE[log.module]}`}
                        >
                          {log.module}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-pbgreen/80">{log.email}</td>
                      <td className="px-6 py-3">
                        <span
                          className={`font-bold ${ACTION_COLOR[log.action]}`}
                        >
                          [{log.action}]
                        </span>
                      </td>
                      <td className="px-6 py-3 text-white/70">
                        {log.title || (
                          <span className="text-white/15 italic">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
