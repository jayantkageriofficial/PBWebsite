"use client";

import ReviewCard from "@/components/events/ReviewCard";

const reviews = [
  {
    name: "Arjun Mehta",
    review:
      "PBCTF 4.0 was an absolute blast! The Jeopardy style challenges were perfectly balanced for both beginners and experienced players. Learned so much in just one day.",
    rating: 5,
  },
  {
    name: "Sneha Kulkarni",
    review:
      "Attended the IICT 2025 workshop and it genuinely changed how I think about compilers. The speakers were top notch and the hands on sessions were incredibly well organized.",
    rating: 5,
  },
  {
    name: "Rahul Nair",
    review:
      "PB Hustle is the best thing that happened to our college coding culture. Weekly contests keep you sharp and the problems are always thoughtfully curated. Highly recommend.",
    rating: 5,
  },
  {
    name: "Divya Ramesh",
    review:
      "The SIH Internal Round was intense but so well managed by the Point Blank team. The problem statements were challenging and the mentors were always available to guide us.",
    rating: 4,
  },
  {
    name: "Karthik Subramaniam",
    review:
      "Zenith was unlike any event I have attended before. The energy in the room was electric and the competitive atmosphere pushed me to perform beyond what I thought I was capable of.",
    rating: 5,
  },
  {
    name: "Ananya Iyer",
    review:
      "PB CTF 3.0 was my first ever CTF and Point Blank made it so welcoming for newcomers. The cryptography and steganography challenges were mind bending in the best way possible.",
    rating: 5,
  },
  {
    name: "Vikram Bhat",
    review:
      "IICT 2024 had some of the most insightful talks on compiler technology I have ever seen at a college level event. Point Blank clearly puts in a lot of effort into quality.",
    rating: 5,
  },
  {
    name: "Pooja Venkatesh",
    review:
      "The Recruitment Registration session was informative but felt a bit rushed. Would have loved more time for Q&A. Overall still a good initiative by the club.",
    rating: 3,
  },
  {
    name: "Rohan Desai",
    review:
      "PB CTF 2.0 at Bangalore was phenomenal. The web exploitation challenges were brutal and the prize pool made the competition even more exciting. Cannot wait for the next one.",
    rating: 5,
  },
  {
    name: "Lakshmi Prasad",
    review:
      "Point Blank consistently delivers world class events for a college club. PBCTF and PB Hustle have genuinely improved my problem solving skills over the past year. Truly grateful.",
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
