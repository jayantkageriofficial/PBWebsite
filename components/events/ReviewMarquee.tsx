"use client";

import ReviewCard from "@/components/events/ReviewCard";

const reviews = [
  {
    name: "Arjun",
    review: "PBCTF 4.0 was an absolute blast! The challenges were perfectly balanced for beginners and pros alike.",
    rating: 5,
  },
  {
    name: "Sneha",
    review: "IICT 2025 genuinely changed how I think about compilers. Super well organized and insightful.",
    rating: 5,
  },
  {
    name: "Rahul",
    review: "PB Hustle keeps you sharp every week. Best thing to happen to our college coding culture.",
    rating: 5,
  },
  {
    name: "Divya",
    review: "SIH Internal Round was brilliantly managed. Mentors were always there to guide and support us.",
    rating: 5,
  },
  {
    name: "Karthik",
    review: "Zenith had an electric atmosphere. It pushed me beyond what I thought I was capable of.",
    rating: 5,
  },
  {
    name: "Ananya",
    review: "PB CTF 3.0 was my first CTF and Point Blank made it so welcoming. Mind bending challenges!",
    rating: 5,
  },
  {
    name: "Vikram",
    review: "IICT 2024 had the best compiler tech talks I have seen at any college event. Truly impressive.",
    rating: 5,
  },
  {
    name: "Pooja",
    review: "The Recruitment session was super helpful and well structured. Great initiative by Point Blank!",
    rating: 5,
  },
  {
    name: "Rohan",
    review: "PB CTF 2.0 in Bangalore was phenomenal. The web exploitation rounds were brutal and exciting.",
    rating: 5,
  },
  {
    name: "Lakshmi",
    review: "Point Blank consistently delivers. PBCTF and PB Hustle have genuinely leveled up my skills.",
    rating: 5,
  },
];

export default function ReviewMarquee() {
  const topRow = reviews.slice(0, 5);
  const bottomRow = reviews.slice(5, 10);

  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <style>{`
                @keyframes scrollLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scrollRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
            `}</style>

      {/* Top row — scrolls left */}
      <div className="overflow-hidden w-full">
        <div className="flex gap-4 w-max animate-[scrollLeft_60s_linear_infinite]">
          {[...topRow, ...topRow, ...topRow, ...topRow].map((r, i) => (
            <div key={i} className="w-81">
              <ReviewCard {...r} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row — scrolls right */}
      <div className="overflow-hidden w-full">
        <div className="flex gap-4 w-max animate-[scrollRight_60s_linear_infinite]">
          {[...bottomRow, ...bottomRow, ...bottomRow, ...bottomRow].map(
            (r, i) => (
              <div key={i} className="w-81">
                <ReviewCard {...r} />
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
