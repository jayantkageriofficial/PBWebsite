"use client";
import { useState } from "react";

type TabType = "all" | "conference" | "talks" | "other";

type Talk = {
  id: number;
  title: string;
  description: string;
  type: TabType;
  author: string;
  date: string;
  venue: string;
};

const data: Talk[] = [
  {
    id: 1,
    title:
      "Security-Aware Prompting Alone Does Not prevent Crashes in LLM-Generated C Code",
    description:
      "At the CSS workshop co-located with the FSTTCS Conference in Goa...",
    type: "conference",
    author: "Ashutosh Pandey",
    date: "December 2025",
    venue: "FSTTCS Conference",
  },
];

export default function TalksSection() {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const tabs: TabType[] = ["all", "conference", "talks", "other"];

  const filteredData =
    activeTab === "all" ? data : data.filter((item) => item.type === activeTab);

  return (
    <section className="bg-black text-white py-16 text-Lexend min-h-[90vh]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">
          We Speak. We Share. We Lead.
        </h1>
        <p className="text-gray-400 mb-8">
          A showcase of talks and conferences by the talented members of Point
          Blank.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-sm capitalize
                ${
                  activeTab === tab
                    ? "bg-pbgreen text-black"
                    : "bg-white/5 text-white/60"
                }`}
            >
              {tab === "all" ? "All" : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      {filteredData.map((item) => (
        <div key={item.id} className="bg-white/4 rounded-2xl px-24">
          <div className="flex py-6">
            <div className="flex flex-col items-center">
              <div className="w-80 h-60 bg-gray-400 rounded-xl  " />

              <span className="text-pbgreen text-sm mt-3 ">{item.author}</span>
            </div>

            <div className="flex flex-col flex-1 px-9">
              <div className="mb-4">
                <h2 className="text-pbgreen font-size: 18px; font-semibold leading-snug mb-2 max-w-130">
                  {item.title}
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed max-w-120">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <span className="bg-black/40 px-3 py-1 rounded-full text-xs">
                    {item.venue}
                  </span>
                </div>

                <span className="bg-black/40 px-3 py-1 rounded-full text-xs">
                  {item.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
