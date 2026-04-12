"use client";

import React from "react";
import { motion } from "framer-motion";
import { Latest, Leaderboard } from "@/lib/db/models/hustle";

interface HustleProps {
  latest: Latest | null;
  leaderboard: Leaderboard | null;
}

type Tab = "leaderboard" | "latest";

export default function Hustle({ latest, leaderboard }: HustleProps) {
  const [tab, setTab] = React.useState<Tab>("leaderboard");
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [showSearchBox, setShowSearchBox] = React.useState<boolean>(false);

  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const tableRef = React.useRef<HTMLDivElement>(null);

  const itemsPerPage = 20;

  const activeData =
    tab === "leaderboard"
      ? (leaderboard?.rankings ?? [])
      : (latest?.results ?? []);

  const filtered = activeData.filter((entry) =>
    entry.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  }

  function handleTabChange(newTab: Tab) {
    setTab(newTab);
    setCurrentPage(1);
    setSearchTerm("");
    setShowSearchBox(false);
  }

  function changePage(page: number) {
    setCurrentPage(page);
    tableRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function getVisiblePages() {
    if (totalPages <= 3) {
      const arr = [];
      for (let i = 1; i <= totalPages; i++) arr.push(i);
      return arr;
    }
    if (currentPage <= 2) return [1, 2, 3];
    if (currentPage >= totalPages - 1)
      return [totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  }

  const visiblePages = getVisiblePages();

  const updatedAt =
    tab === "leaderboard" ? leaderboard?.updatedAt : latest?.updateTime;

  const updatedAtStr = updatedAt
    ? new Date(updatedAt).toLocaleString("en-IN", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    : null;

  const colsClass =
    "grid grid-cols-[70px_minmax(0,1fr)_100px] md:grid-cols-[200px_minmax(0,1fr)_150px]";

  return (
    <div className="bg-pbpages text-white min-h-screen flex flex-col">
      <div className="grow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-16"
        >
          <h1 className="text-6xl font-bold tracking-tight text-white">
            PB Hustle
          </h1>
          <p className="text-pbmuted mt-4 text-lg">
            Track latest results and overall rankings in real-time
          </p>
        </motion.div>

        <div className="max-w-295 mx-auto mt-10 px-6 flex gap-3">
          <button
            onClick={() => handleTabChange("leaderboard")}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              tab === "leaderboard"
                ? "bg-pbgreen text-black"
                : "bg-white text-black"
            }`}
          >
            Overall Leaderboard
          </button>
          <button
            onClick={() => handleTabChange("latest")}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              tab === "latest" ? "bg-pbgreen text-black" : "bg-white text-black"
            }`}
          >
            Latest Contest
          </button>
        </div>

        <div className="max-w-295 mx-auto mt-6 px-6 flex items-start justify-between">
          <div className="flex items-start gap-4 relative">
            <div className="relative">
              <div
                className={`flex items-center overflow-hidden rounded-xl bg-white text-black transition-all duration-300 ease-in-out ${
                  showSearchBox ? "w-xs px-4 py-3" : "w-31.5 px-5 py-3"
                }`}
              >
                <button
                  onClick={() => {
                    if (!showSearchBox) {
                      setShowSearchBox(true);
                      setTimeout(() => {
                        searchInputRef.current?.focus();
                      }, 200);
                    }
                  }}
                  className="flex items-center gap-2 shrink-0"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>
                  {!showSearchBox && (
                    <span className="text-sm font-semibold">Search</span>
                  )}
                </button>

                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className={`bg-transparent outline-none text-sm text-black placeholder:text-black/50 transition-all duration-200 ${
                    showSearchBox
                      ? "ml-3 w-full opacity-100"
                      : "ml-0 w-0 opacity-0 pointer-events-none"
                  }`}
                />

                {showSearchBox && (
                  <button
                    onClick={() => {
                      setShowSearchBox(false);
                      setSearchTerm("");
                      setCurrentPage(1);
                    }}
                    className="ml-2 shrink-0 text-black/70 hover:text-black transition"
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {updatedAtStr && (
              <span className="text-sm text-pbtext mt-3">
                Last updated: {updatedAtStr}
              </span>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-295 mx-auto mt-6 px-6 mb-20"
        >
          <div
            ref={tableRef}
            className="bg-pbcard border border-white/70 rounded-2xl overflow-hidden"
          >
            <div
              className={`${colsClass} px-4 md:px-6 py-4 text-sm font-semibold text-white border-b border-white/70`}
            >
              <span>Rank</span>
              <span className="ml-2 md:ml-4">User</span>
              <span className="text-center">Score</span>
            </div>

            {paginated.length > 0 ? (
              paginated.map((entry, index) => (
                <div
                  key={entry.rank}
                  className={`${colsClass} items-center px-4 md:px-6 py-4 text-sm ${
                    index !== paginated.length - 1
                      ? "border-b border-white/70"
                      : ""
                  }`}
                >
                  <span className="text-white">{entry.rank}</span>

                  <div className="flex items-center gap-2 md:gap-4 min-w-0 ml-2 md:ml-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-pbgray shrink-0 flex items-center justify-center text-white font-semibold text-sm md:text-base select-none">
                      {entry.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-white text-xs md:text-sm leading-none truncate" title={entry.name}>
                        {entry.name}
                      </div>
                    </div>
                  </div>

                  <span className="text-center text-white">{entry.score}</span>
                </div>
              ))
            ) : (
              <div className="px-6 py-10 text-center text-pbtext">
                {tab === "leaderboard"
                  ? "No members found."
                  : "No results found."}
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-center">
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => changePage(currentPage - 1)}
                hidden={currentPage === 1}
                className="w-14 h-14 rounded-2xl bg-white text-black text-xl font-semibold flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed"
              >
                &lt;
              </button>

              {visiblePages.map((page) => (
                <button
                  key={page}
                  onClick={() => changePage(page)}
                  className={`w-14 h-14 rounded-2xl text-xl font-semibold flex items-center justify-center ${
                    currentPage === page
                      ? "bg-pbgreen text-black"
                      : "bg-white text-black"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => changePage(currentPage + 1)}
                hidden={currentPage === totalPages || filtered.length === 0}
                className="w-14 h-14 rounded-2xl bg-white text-black text-xl font-semibold flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed"
              >
                &gt;
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
