"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { AchievementCard, members } from "@/components/Achievmentscard";

const categories = ["ALL", "HACKATHONS", "GSOC", "LFX", "SIH", "LIFT", "ACM", "CP"];

export default function AchievementsPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when search opens
  useEffect(() => {
    if (searchOpen) {
      inputRef.current?.focus();
    }
  }, [searchOpen]);

  const handleSearchToggle = () => {
    if (searchOpen) {
      setSearchQuery("");
      setSearchOpen(false);
    } else {
      setSearchOpen(true);
    }
  };

  const filteredMembers = members.filter((member) => {
    const matchesCategory =
      activeCategory === "ALL" ||
      member.achievements.some((row) =>
        row.some((item) => item.category === activeCategory)
      );
    const matchesSearch =
      searchQuery.trim() === "" ||
      member.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-pbpages text-white">

      {/* heading */}
      <div className="flex flex-col items-center justify-center pt-20 pb-12 px-4 text-center">
        <h1 className="font-sans font-normal text-4xl sm:text-5xl lg:text-6xl leading-[150%] tracking-normal text-white m-0 mb-2">
          We Build. We Ship. We Win.
        </h1>

        <p className="font-sans font-light text-base sm:text-xl lg:text-2xl leading-relaxed text-center text-pbtext mb-12">
          A showcase of achievements by the talented members of PointBlank
        </p>

        {/* filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-2.5 rounded-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-widest transition-all duration-200 cursor-pointer
                ${activeCategory === cat
                  ? "bg-pbgreen text-black"
                  : "bg-pbgray text-pbtext hover:bg-pbgreen hover:text-black"
                }`}
            >
              {cat}
            </button>
          ))}

          {/* Search input + icon */}
          <div className="flex items-center gap-2">
            <div
              className={`flex items-center overflow-hidden transition-all duration-300 ease-in-out bg-pbgray rounded-full ${
                searchOpen ? "w-48 px-3" : "w-0 px-0"
              }`}
            >
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search members..."
                className="bg-transparent text-white text-xs placeholder-pbtext outline-none w-full py-2"
              />
            </div>
            <button
              onClick={handleSearchToggle}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-pbgray text-pbtext hover:bg-pbgreen hover:text-black transition-all duration-200 cursor-pointer shrink-0"
              aria-label={searchOpen ? "Close search" : "Open search"}
            >
              {searchOpen ? <X size={16} /> : <Search size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* member cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-15 pb-8 sm:pb-12 lg:pb-15">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member, i) => (
            <AchievementCard key={i} member={member} filterCategory={activeCategory} />
          ))
        ) : (
          <p className="col-span-full text-center text-pbtext py-12 text-lg">
            No members found for &quot;{searchQuery}&quot;.
          </p>
        )}
      </div>

    </main>
  );
}
