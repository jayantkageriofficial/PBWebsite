"use client";
export type AchievementRow = {
  leftEvent: string;
  leftResult: string;
  rightEvent: string;
  rightResult: string;
};

export type Member = {
  name: string;
  avatar: string;
  achievements: AchievementRow[];
};


// EDIT YOUR MEMBERS & ACHIEVEMENTS HERE
export const members: Member[] = [
  {
    name: "Akash Singh",
    avatar: "",
    achievements: [
      { leftEvent: "GSoC '24", leftResult: "@Keploy", rightEvent: "LFX '25", rightResult: "@LitmusChaos" },
      { leftEvent: "SIH '25", leftResult: "Winner", rightEvent: "LIFT '25", rightResult: "xyz" },
      { leftEvent: "HackGlobal Singapore", leftResult: "Finalists", rightEvent: "NITK '25", rightResult: "Grand Winner" },
      { leftEvent: "Warpspeed", leftResult: "Grand Winner", rightEvent: "Hackbangalore '25", rightResult: "Winner" },
      { leftEvent: "JIT Hack '23", leftResult: "Runner up", rightEvent: "ACM Winter School '24", rightResult: "AVV, Coimbatore" },
    ],
  },

  // ── Add more members below ──
  // {
  //   name: "Priya Sharma",
  //   avatar: "",
  //   achievements: [
  //     { leftEvent: "GSoC '25", leftResult: "@Google", rightEvent: "SIH '25", rightResult: "Winner" },
  //   ],
  // },
];


//  Card Component (no need to edit this part)
export function AchievementCard({ member }: { member: Member }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="w-[360px] rounded-[14px] border border-[#2a2a2a] bg-[#1C1C1C] flex flex-col overflow-hidden">

      {/* ── Profile Section ── */}
      <div className="flex items-center gap-4 px-6 py-5">

        {/* Avatar */}
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

          {/* Badge */}
          <div className="absolute -bottom-0.5 -right-0.5 w-[22px] h-[22px] rounded-full bg-[#FFB413] flex items-center justify-center text-[11px] border-2 border-[#1C1C1C]">
            <img src="/achievement.svg" alt="" />
          </div>
        </div>

        {/* Name */}
        <div className="min-w-0 flex-1 flex flex-col justify-center gap-0.5">
          <span className="text-[22px] font-bold text-white tracking-tight leading-none break-words">
            {member.name}
          </span>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="h-[1.5px] bg-white/25 mx-4" />

      {/* ── Achievement Rows ── */}
      <div className="bg-[#1C1C1C] flex flex-col p-[10px_12px] gap-2">
        {member.achievements.map((row, i) => (
          <div key={i} className="grid grid-cols-2 gap-2">

            {/* Left achievement cell */}
            <div className="bg-[#191919] rounded-lg px-[14px] py-[10px] min-w-0">
              <p className="text-[13px] font-semibold text-[#39d353] m-0 break-words">
                {row.leftEvent}
              </p>
              <p className="text-[12px] text-[#b0b0b0] m-0 mt-[3px] break-words">{row.leftResult}</p>
            </div>

            {/* Right achievement cell */}
            <div className="bg-[#191919] rounded-lg px-[14px] py-[10px] min-w-0">
              <p className="text-[13px] font-semibold text-[#39d353] m-0 break-words">
                {row.rightEvent}
              </p>
              <p className="text-[12px] text-[#b0b0b0] m-0 mt-[3px] break-words">{row.rightResult}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
