"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { AchievementCard, members } from "@/components/Achievmentscard";

const categories = ["ALL", "HACKATHONS", "GSOC", "LFX", "SIH", "LIFT", "ACM", "CP"];

export default function AchievementsPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

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
          <button className="flex items-center justify-center w-9 h-9 rounded-full bg-pbgray text-pbtext hover:bg-pbgreen hover:text-black transition-all duration-200 cursor-pointer">
            <Search size={16} />
          </button>
        </div>
      </div>


      {/* member cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-15 pb-8 sm:pb-12 lg:pb-15">
        {members
          .filter((member) =>
            activeCategory === "ALL" ||
            member.achievements.some((row) =>
              row.some((item) => item.category === activeCategory)
            )
          )
          .map((member, i) => (
            <AchievementCard key={i} member={member} filterCategory={activeCategory} />
          ))}
      </div>

    </main>
  );
}
