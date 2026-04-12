"use client";

export type AchievementItem = {
  event: string;
  result: string;
  category: string;   // "GSOC" | "LFX" | "HACKATHONS" | "SIH" | "LIFT" | "ACM" | "CP"
};

// Each row is an array of items — 1 item = full width, 2 = two columns, 3 = three columns, etc.
export type AchievementRow = AchievementItem[];

export type Member = {
  name: string;
  avatar: string;
  achievements: AchievementRow[];
};


// add/edit members here
export const members: Member[] = [
  {
    name: "Akash Singh",
    avatar: "",
    achievements: [
      [
        { event: "GSoC '24", result: "@Keploy", category: "GSOC" },
        { event: "LFX '25", result: "@LitmusChaos", category: "LFX" },
      ],
      [
        { event: "SIH '25", result: "Winner", category: "SIH" },
        { event: "LIFT '25", result: "xyz", category: "LIFT" },
      ],
      [
        { event: "HackGlobal Singapore", result: "Finalists", category: "HACKATHONS" },
        { event: "NITK '25", result: "Grand Winner", category: "HACKATHONS" },
      ],
      [
        { event: "Warpspeed", result: "Grand Winner", category: "HACKATHONS" },
        { event: "Hackbangalore '25", result: "Winner", category: "HACKATHONS" },
      ],
      [
        { event: "JIT Hack '23", result: "Runner up", category: "HACKATHONS" },
        { event: "ACM Winter School '24", result: "AVV, Coimbatore", category: "ACM" },
      ],
    ],
  },
  {
    name: "Priya Sharma",
    avatar: "",
    achievements: [
      [
        { event: "GSoC '25", result: "@Mozilla", category: "GSOC" },
        { event: "GSoC '24", result: "@TensorFlow", category: "GSOC" },
      ],
      [
        { event: "SIH '24", result: "Winner", category: "SIH" },
        { event: "ACM ICPC '24", result: "Regionalist", category: "ACM" },
      ],
    ],
  },
  {
    name: "Rohan Mehta",
    avatar: "",
    achievements: [
      [
        { event: "LFX '24", result: "@CNCF", category: "LFX" },
        { event: "LFX '25", result: "@Kubernetes", category: "LFX" },
      ],
      [
        { event: "Codeforces", result: "Expert (1600+)", category: "CP" },
        { event: "Leetcode", result: "Top 5%", category: "CP" },
      ],
      [
        { event: "Smart India Hack", result: "Finalist", category: "SIH" },
        { event: "HackBVP '24", result: "Winner", category: "HACKATHONS" },
      ],
    ],
  },
  {
    name: "Sneha Patel",
    avatar: "",
    achievements: [
      [
        { event: "HackMIT '24", result: "Top 10", category: "HACKATHONS" },
        { event: "DevFest Hack", result: "Winner", category: "HACKATHONS" },
      ],
      [
        { event: "ACM-W '25", result: "Scholar", category: "ACM" },
        { event: "GSoC '25", result: "@NumFOCUS", category: "GSOC" },
      ],
      [
        { event: "CP Sheet", result: "500 solved", category: "CP" },
        { event: "ICPC '24", result: "Regionalist", category: "ACM" },
      ],
    ],
  },

  // { name: "...", avatar: "", achievements: [...] },
];


// CARD LAYOUT
export function AchievementCard({ member, filterCategory }: { member: Member; filterCategory: string }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="w-full h-full rounded-xl border border-pbborder bg-pbgray flex flex-col overflow-hidden">

      {/* profile */}
      <div className="flex items-center gap-4 px-6 py-5">


        <div className="relative shrink-0">
          <div className="w-15 h-15 rounded-full bg-linear-to-br from-[#2a2a2a] to-[#3d3d3d] flex items-center justify-center text-lg font-bold text-pbtext overflow-hidden border-2 border-[#333]">
            {member.avatar ? (
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              initials
            )}
          </div>


          <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#FFB413] flex items-center justify-center text-xs border-2 border-pbgray">
            <img src="/badge.svg" alt="badge" />
          </div>
        </div>


        <div className="min-w-0 flex-1 flex flex-col justify-center gap-0.5">
          <span className="text-xl font-medium text-white tracking-tight leading-none wrap-break-word">
            {member.name}
          </span>
        </div>
      </div>

      {/* divider */}
      <div className="h-px bg-white/25 mx-4" />

      {/* achievements */}
      <div className="bg-pbgray flex flex-col px-3 py-2.5 gap-2">
        {member.achievements
          .map((row) =>
            filterCategory === "ALL"
              ? row
              : row.filter((item) => item.category === filterCategory)
          )
          .filter((row) => row.length > 0)
          .map((row, i) => {
            const cols = row.length;
            const gridClass =
              cols === 1 ? "grid-cols-1" :
                cols === 2 ? "grid-cols-2" :
                  cols === 3 ? "grid-cols-3" :
                    "grid-cols-4";
            return (
              <div key={i} className={`grid gap-2 ${gridClass}`}>
                {row.map((item, j) => (
                  <div key={j} className="bg-pbsurface rounded-lg px-3.5 py-2.5 min-w-0">
                    <p className="text-sm font-normal text-[#39d353] m-0 wrap-break-word">
                      {item.event}
                    </p>
                    <p className="text-xs text-pbtext m-0 mt-0.5 wrap-break-word">{item.result}</p>
                  </div>
                ))}
              </div>
            );
          })}
      </div>

    </div>
  );
}
