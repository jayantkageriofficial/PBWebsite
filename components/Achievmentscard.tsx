"use client";
export type AchievementRow = {
  leftEvent: string;
  leftResult: string;
  leftCategory: string;   // "GSOC" | "LFX" | "HACKATHONS" | "SIH" | "LIFT" | "ACM" | "CP"
  rightEvent: string;
  rightResult: string;
  rightCategory: string;
};

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
      { leftEvent: "GSoC '24", leftResult: "@Keploy", leftCategory: "GSOC", rightEvent: "LFX '25", rightResult: "@LitmusChaos", rightCategory: "LFX" },
      { leftEvent: "SIH '25", leftResult: "Winner", leftCategory: "SIH", rightEvent: "LIFT '25", rightResult: "xyz", rightCategory: "LIFT" },
      { leftEvent: "HackGlobal Singapore", leftResult: "Finalists", leftCategory: "HACKATHONS", rightEvent: "NITK '25", rightResult: "Grand Winner", rightCategory: "HACKATHONS" },
      { leftEvent: "Warpspeed", leftResult: "Grand Winner", leftCategory: "HACKATHONS", rightEvent: "Hackbangalore '25", rightResult: "Winner", rightCategory: "HACKATHONS" },
      { leftEvent: "JIT Hack '23", leftResult: "Runner up", leftCategory: "HACKATHONS", rightEvent: "ACM Winter School '24", rightResult: "AVV, Coimbatore", rightCategory: "ACM" },
    ],
  },
  {
    name: "Priya Sharma",
    avatar: "",
    achievements: [
      { leftEvent: "GSoC '25", leftResult: "@Mozilla", leftCategory: "GSOC", rightEvent: "GSoC '24", rightResult: "@TensorFlow", rightCategory: "GSOC" },
      { leftEvent: "SIH '24", leftResult: "Winner", leftCategory: "SIH", rightEvent: "ACM ICPC '24", rightResult: "Regionalist", rightCategory: "ACM" },
    ],
  },
  {
    name: "Rohan Mehta",
    avatar: "",
    achievements: [
      { leftEvent: "LFX '24", leftResult: "@CNCF", leftCategory: "LFX", rightEvent: "LFX '25", rightResult: "@Kubernetes", rightCategory: "LFX" },
      { leftEvent: "Codeforces", leftResult: "Expert (1600+)", leftCategory: "CP", rightEvent: "Leetcode", rightResult: "Top 5%", rightCategory: "CP" },
      { leftEvent: "Smart India Hack", leftResult: "Finalist", leftCategory: "SIH", rightEvent: "HackBVP '24", rightResult: "Winner", rightCategory: "HACKATHONS" },
    ],
  },
  {
    name: "Sneha Patel",
    avatar: "",
    achievements: [
      { leftEvent: "HackMIT '24", leftResult: "Top 10", leftCategory: "HACKATHONS", rightEvent: "DevFest Hack", rightResult: "Winner", rightCategory: "HACKATHONS" },
      { leftEvent: "ACM-W '25", leftResult: "Scholar", leftCategory: "ACM", rightEvent: "GSoC '25", rightResult: "@NumFOCUS", rightCategory: "GSOC" },
      { leftEvent: "CP Sheet", leftResult: "500 solved", leftCategory: "CP", rightEvent: "ICPC '24", rightResult: "Regionalist", rightCategory: "ACM" },
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
    <div className="min-w-[360px] w-full rounded-[14px] border border-pbborder bg-pbgray flex flex-col overflow-hidden">

      {/* profile */}
      <div className="flex items-center gap-4 px-6 py-5">


        <div className="relative shrink-0">
          <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#2a2a2a] to-[#3d3d3d] flex items-center justify-center text-lg font-bold text-[#888] overflow-hidden border-2 border-[#333]">
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


          <div className="absolute -bottom-0.5 -right-0.5 w-[22px] h-[22px] rounded-full bg-[#FFB413] flex items-center justify-center text-[11px] border-2 border-pbgray">
            <img src="/achievement.svg" alt="" />
          </div>
        </div>


        <div className="min-w-0 flex-1 flex flex-col justify-center gap-0.5">
          <span className="text-xl font-medium text-white tracking-tight leading-none break-words">
            {member.name}
          </span>
        </div>
      </div>

      {/* divider */}
      <div className="h-px bg-white/25 mx-4" />

      {/* achievements */}
      <div className="bg-pbgray flex flex-col px-3 py-2.5 gap-2">
        {member.achievements
          .filter((row) =>
            filterCategory === "ALL" ||
            row.leftCategory === filterCategory ||
            row.rightCategory === filterCategory
          )
          .map((row, i) => {
            const showLeft = filterCategory === "ALL" || row.leftCategory === filterCategory;
            const showRight = filterCategory === "ALL" || row.rightCategory === filterCategory;
            return (
              <div key={i} className={`grid gap-2 ${showLeft && showRight ? "grid-cols-2" : "grid-cols-1"}`}>


                {showLeft && (
                  <div className="bg-pbsurface rounded-lg px-3.5 py-2.5 min-w-0">
                    <p className="text-sm font-normal text-[#39d353] m-0 break-words">
                      {row.leftEvent}
                    </p>
                    <p className="text-xs text-pbtext m-0 mt-0.5 break-words">{row.leftResult}</p>
                  </div>
                )}


                {showRight && (
                  <div className="bg-pbsurface rounded-lg px-3.5 py-2.5 min-w-0">
                    <p className="text-sm font-normal text-[#39d353] m-0 break-words">
                      {row.rightEvent}
                    </p>
                    <p className="text-xs text-pbtext m-0 mt-0.5 break-words">{row.rightResult}</p>
                  </div>
                )}

              </div>
            );
          })}
      </div>

    </div>
  );
}
