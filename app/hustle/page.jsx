"use client";

import { useRef, useState } from "react";

const members = [
  { rank: 1, name: "User 1", handle: "@user1", score: 0, status: "Active" },
  { rank: 2, name: "User 2", handle: "@user2", score: 0, status: "Active" },
  { rank: 3, name: "User 3", handle: "@user3", score: 0, status: "Active" },
  { rank: 4, name: "User 4", handle: "@user4", score: 0, status: "Active" },
  { rank: 5, name: "User 5", handle: "@user5", score: 0, status: "Active" },
  { rank: 6, name: "User 6", handle: "@user6", score: 0, status: "Active" },
  { rank: 7, name: "User 7", handle: "@user7", score: 0, status: "Active" },
  { rank: 8, name: "User 8", handle: "@user8", score: 0, status: "Active" },
  { rank: 9, name: "User 9", handle: "@user9", score: 0, status: "Active" },
  { rank: 10, name: "User 10", handle: "@user10", score: 0, status: "Active" },
  { rank: 11, name: "User 11", handle: "@user11", score: 0, status: "Active" },
  { rank: 12, name: "User 12", handle: "@user12", score: 0, status: "Active" },
  { rank: 13, name: "User 13", handle: "@user13", score: 0, status: "Active" },
  { rank: 14, name: "User 14", handle: "@user14", score: 0, status: "Active" },
  { rank: 15, name: "User 15", handle: "@user15", score: 0, status: "Active" },
  { rank: 16, name: "User 16", handle: "@user16", score: 0, status: "Active" },
  { rank: 17, name: "User 17", handle: "@user17", score: 0, status: "Active" },
  { rank: 18, name: "User 18", handle: "@user18", score: 0, status: "Active" },
  { rank: 19, name: "User 19", handle: "@user19", score: 0, status: "Active" },
  { rank: 20, name: "User 20", handle: "@user20", score: 0, status: "Active" },
  { rank: 21, name: "User 21", handle: "@user21", score: 0, status: "Active" },
  { rank: 22, name: "User 22", handle: "@user22", score: 0, status: "Active" },
  { rank: 23, name: "User 23", handle: "@user23", score: 0, status: "Active" },
  { rank: 24, name: "User 24", handle: "@user24", score: 0, status: "Active" },
  { rank: 25, name: "User 25", handle: "@user25", score: 0, status: "Active" },
  { rank: 26, name: "User 26", handle: "@user26", score: 0, status: "Active" },
  { rank: 27, name: "User 27", handle: "@user27", score: 0, status: "Active" },
  { rank: 28, name: "User 28", handle: "@user28", score: 0, status: "Active" },
  { rank: 29, name: "User 29", handle: "@user29", score: 0, status: "Active" },
  { rank: 30, name: "User 30", handle: "@user30", score: 0, status: "Active" }
];

export default function HustlePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showFilterBox, setShowFilterBox] = useState(false);

  const searchInputRef = useRef(null);

  const itemsPerPage = 20;

  const filteredMembers = members.filter((member) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      member.name.toLowerCase().includes(search) ||
      member.handle.toLowerCase().includes(search);

    const matchesStatus =
      statusFilter === "All" || member.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.max(1, Math.ceil(filteredMembers.length / itemsPerPage));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedMembers = filteredMembers.slice(startIndex, endIndex);

  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  }

  function handleFilterChange(e) {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  }

  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function goToNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function getVisiblePages() {
    if (totalPages <= 3) {
      const arr = [];
      for (let i = 1; i <= totalPages; i++) arr.push(i);
      return arr;
    }

    if (currentPage <= 2) return [1, 2, 3];
    if (currentPage >= totalPages - 1) return [totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  }

  const visiblePages = getVisiblePages();

  return (
    <div className="bg-pbpages text-white min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="text-center mt-16">
          <h1 className="text-6xl font-bold tracking-tight text-white">
            PB Hustle
          </h1>
          <p className="text-[#8e8e93] mt-4 text-[15px]">
            Track latest results and overall rankings in real-time
          </p>
        </div>

        <div className="max-w-[1180px] mx-auto mt-16 px-6 flex items-start justify-between">
          <div className="flex items-start gap-4 relative">
            <div className="relative">
              <div
                className={`flex items-center overflow-hidden rounded-xl bg-white text-black transition-all duration-300 ease-in-out ${
                  showSearchBox ? "w-[320px] px-4 py-3" : "w-[126px] px-5 py-3"
                }`}
              >
                <button
                  onClick={() => {
                    if (!showSearchBox) {
                      setShowSearchBox(true);
                      setShowFilterBox(false);

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

            <span className="text-sm text-[#7e7e84] mt-3">
              Last updated: Apr 12, 2026, 3:07 PM
            </span>
          </div>

          <div className="relative">
            <button
              onClick={() => {
                setShowFilterBox(!showFilterBox);
                setShowSearchBox(false);
              }}
              className="flex items-center gap-2 bg-white text-black text-sm font-semibold px-5 py-3 rounded-xl"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 5h18l-7 8v5l-4 2v-7L3 5z" />
              </svg>
              Filter
            </button>

            {showFilterBox && (
              <div className="absolute top-16 right-0 w-[180px] bg-[#121212] border border-white/30 rounded-xl p-2 z-20">
                <button
                  onClick={() => {
                    setStatusFilter("All");
                    setCurrentPage(1);
                    setShowFilterBox(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                    statusFilter === "All"
                      ? "bg-pbgreen text-black"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  All Status
                </button>

                <button
                  onClick={() => {
                    setStatusFilter("Active");
                    setCurrentPage(1);
                    setShowFilterBox(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                    statusFilter === "Active"
                      ? "bg-pbgreen text-black"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Active
                </button>

                <button
                  onClick={() => {
                    setStatusFilter("Inactive");
                    setCurrentPage(1);
                    setShowFilterBox(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                    statusFilter === "Inactive"
                      ? "bg-pbgreen text-black"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Inactive
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-[1180px] mx-auto mt-6 px-6 mb-20">
          <div className="bg-[#121212] border border-white/70 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-[70px_minmax(0,1fr)_100px_130px] md:grid-cols-[200px_minmax(0,1fr)_150px_350px] px-4 md:px-6 py-4 text-[15px] font-semibold text-white border-b border-white/70">
              <span>Rank</span>
              <span className="ml-4">User</span>
              <span className="text-center">Score</span>
              <span className="text-center">Status</span>
            </div>

            {paginatedMembers.length > 0 ? (
              paginatedMembers.map((member, index) => (
                <div
                  key={member.rank}
                  className={`grid grid-cols-[70px_minmax(0,1fr)_100px_130px] md:grid-cols-[200px_minmax(0,1fr)_150px_350px] items-center px-4 md:px-6 py-4 text-[15px] ${
                    index !== paginatedMembers.length - 1
                      ? "border-b border-white/70"
                      : ""
                  }`}
                >
                  <span className="text-white">{member.rank}</span>

                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-full bg-[#1c1c1c] shrink-0"></div>

                    <div className="min-w-0">
                      <div className="text-white text-[15px] leading-none truncate">
                        {member.name}
                      </div>
                      <div className="text-[#8a8a90] text-sm mt-1 truncate">
                        {member.handle}
                      </div>
                    </div>
                  </div>

                  <span className="text-center text-white">{member.score}</span>

                  <div className="flex justify-center">
                    <span
                      className={`px-5 py-2 rounded-full text-sm ${
                        member.status === "Active"
                          ? "bg-pbsurface text-pbgreen"
                          : "bg-pbsurface text-white"
                      }`}
                    >
                      {member.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-10 text-center text-[#8a8a90]">
                No members found.
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-center">
            <div className="flex items-center justify-center gap-3">
              {currentPage !== 1 && (
                <button
                  onClick={goToPreviousPage}
                  className="w-14 h-14 rounded-2xl bg-white text-black text-xl font-semibold flex items-center justify-center"
                >
                  &lt;
                </button>
              )}

              {visiblePages.map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-14 h-14 rounded-2xl text-xl font-semibold flex items-center justify-center ${
                    currentPage === page
                      ? "bg-pbgreen text-black"
                      : "bg-white text-black"
                  }`}
                >
                  {page}
                </button>
              ))}

              {currentPage !== totalPages && filteredMembers.length > 0 && (
                <button
                  onClick={goToNextPage}
                  className="w-14 h-14 rounded-2xl bg-white text-black text-xl font-semibold flex items-center justify-center"
                >
                  &gt;
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}