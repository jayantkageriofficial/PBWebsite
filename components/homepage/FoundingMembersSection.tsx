"use client";

import React from "react";
import FadeIn from "@/components/FadeIn";
import FoundingMemberCard from "@/components/homepage/FoundingMemberCard";
import mohitImg from "@/public/images/mohit.webp";
import soumyaImg from "@/public/images/soumya.webp";
import ashutoshImg from "@/public/images/ashutosh.webp";

const members = [
  {
    name: "Mohit Agarwal",
    bio: "Mohit, SDE2 at Glance, is the driving force behind Point Blank's Competitive Programming culture. He has won several contests, including the Nokia Collegiate Code Rally, and qualified for ACM-ICPC Regionals.",
    img: mohitImg,
    linkedin: "https://linkedin.com/in/mohit-agarwal1",
  },
  {
    name: "Soumya Pattanayak",
    bio: "A top coder at Point Blank, Soumya has worked at Amazon and Verse Innovation. He's an ACM-ICPC regionalist known for his problem-solving skills and innovative projects.",
    img: soumyaImg,
    linkedin: "https://linkedin.com/in/soumya713",
  },
  {
    name: "Ashutosh Pandey",
    bio: "Ashutosh, Compiler Engineer at AMD, excelled in Open Source and Hackathons. As a student, he did GSoC with Arduino, won the Smart India Hackathon, and mentored students for prestigious programs.",
    img: ashutoshImg,
    linkedin: "https://linkedin.com/in/ashupdsce",
  },
];

export default function FoundingMembersSection() {
  const [flippedIndex, setFlippedIndex] = React.useState<number | null>(null);

  const handleFlip = (i: number) => {
    setFlippedIndex(flippedIndex === i ? null : i);
  };

  return (
    <section
      id="founding-members"
      className="bg-pbpages text-white pt-20 px-4 sm:px-10 lg:px-20"
    >
      <div className="max-w-8xl mx-auto">
        <FadeIn className="text-center mb-4">
          <h2 className="text-4xl font-bold text-white">
            Our <span className="text-pbgreen">Founding</span> Members
          </h2>
        </FadeIn>
        <FadeIn
          delay={0.1}
          className="text-center text-white/70 text-sm max-w-xl mx-auto mb-12"
        >
          <p>
            Point Blank is a passion project, born from a shared excitement to
            build and lead a platform for like-minded, driven students to come
            together and learn from each other.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mx-auto">
          {members.map(({ name, bio, img, linkedin }, i) => (
            <FadeIn key={i} delay={i * 0.12} className="h-full">
              <FoundingMemberCard
                name={name}
                bio={bio}
                img={img}
                linkedin={linkedin}
                isFlipped={flippedIndex === i}
                onFlip={() => handleFlip(i)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
