"use client";
import { useState } from "react";
import { Lexend } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import talks1 from "@/public/talks1.jpg";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type TabType = "all" | "conference" | "talks" | "other";

type Talk = {
  id: number;
  title: string;
  description: string;
  type: TabType;
  author: string;
  date: string;
  venue: string;
  image: StaticImageData;
};

const data: Talk[] = [
  {
    id: 1,
    title:
      "Security-Aware Prompting Alone Does Not prevent Crashes in LLM-Generated C Code",
    description:
      "At the CSS Workshop co-located with the FSTTCS Conference in Goa, Ashutosh Pandey presented an experimental investigation into the reliability of LLM-generated C code. The talk demonstrated that....",
    type: "conference",
    author: "Ashutosh Pandey",
    date: "December 2025",
    venue: "FSTTCS Conference",
    image: talks1,
  },
  {
    id: 2,
    title:
      "Comparative Analysis of Intermediate Representations for Security Tasks",
    description:
      "During the CSS Workshop at the FSTTCS Conference, Kamini Banait, Madhur Kumar, and Prajwal K P delivered a research-focused talk exploring the behavior and analytical consequences of intermediate representations generated....",
    type: "conference",
    author: "Kamini Banait, Madhur Kumar, Prajwal KP",
    date: "December 2025",
    venue: "FSTTCS Conference",
    image: talks1,
  },
  {
    id: 3,
    title: "Terraform Terrors Tamed: A GitOps Tale with KCL Magic",
    description:
      "Pratik Singh delivered a practical session on transforming common Terraform pitfalls into robust, policy-compliant Infrastructure as Code using GitOps and KCL (Kubernetes Configuration....",
    type: "conference",
    author: "Ashutosh Pandey",
    date: "April 2025",
    venue: "DevOpsDays Geneva",
    image: talks1,
  },
  {
    id: 4,
    title: "The Future of CI/CD: Continuous Code Quality using AI",
    description:
      "Pratik Singh delivered a practical session on transforming common Terraform pitfalls into robust, policy-compliant Infrastructure as Code using GitOps and KCL (Kubernetes Configuration....",
    type: "conference",
    author: "Pratik Singh",
    date: "April 2025",
    venue: "FOSSASIA Summit 2025",
    image: talks1,
  },
  {
    id: 5,
    title:
      "Ease the Pain of Platform Engineers with Argo CD by Leveraging Kustomize Templates",
    description:
      "Pratik Singh delivered a talk on reducing the operational burden of platform engineers by leveraging Argo CD together with reusable Kustomize templates. He outlined how template....",
    type: "conference",
    author: "Pratik Singh",
    date: "April 2025",
    venue: "GitOps Con",
    image: talks1,
  },
  {
    id: 6,
    title: "IndiaFOSS: Scaling a niche community to 1900 and beyond!",
    description:
      "Ashutosh Pandey delivered an engaging session on growing a specialized tech community around compilers, programming languages, and systems from small beginnings to nearly 2000 engaged....",
    type: "conference",
    author: "Ashutosh Pandey",
    date: "October 2024",
    venue: "IndiaFOSS 2024",
    image: talks1,
  },
];

export default function TalksSection() {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const tabs: TabType[] = ["all", "conference", "talks", "other"];

  const filteredData =
    activeTab === "all" ? data : data.filter((item) => item.type === activeTab);

  return (
    <section className="bg-pbblack rounded-xl text-white py-10 md:py-16 text-lexend-300  min-h-xl">
      <div className="max-w-8xl mx-auto py-20 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl  font-medium mb-8 px-4 md:px-10">
          We Speak. We Share. We Lead.
        </h1>
        <p className="text-gray-400 md:text-2xl lg:text-3xl text-lexend-300 font-light mb-8 ">
          A showcase of talks and conferences by the talented members of
          <br></br>Point Blank.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 py-6 md:py-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 md:px-7 py-2 md:py-4 rounded-full text-sm md:text-xl uppercase
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
        <div
          key={item.id}
          className="bg-pbgray rounded-xl max-w-330 mx-auto flex justify-center mb-6 px-3 md:px-0 "
        >
          <div className="flex flex-col lg:flex-row py-4">
            <div className="flex flex-col items-center">
              <div className="w-full lg:w-150 h-60 md:h-80 lg:h-100 overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={240}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-pbgreen text-light  font-lexend-300 mt-3 bg-black/40 rounded-full px-3 ">
                {item.author}
              </span>
            </div>

            <div className="flex flex-col  px-4 md:px-8 lg:px-12 py-6 lg:py-8">
              <div className="mb-4">
                <h2 className="text-pbgreen  font-medium text-2xl md:text-3xl lg:text-4xl leading-snug mb-2 max-w-150">
                  {item.title}
                </h2>

                <p className="text-gray-400 text-lg md:text-xl lg:text-2xl leading-snug max-w-110">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between py-4 md:py-5 px-2 md:px-4">
                <div className="flex gap-3">
                  <span className="bg-[#191919] py-4 md:py-4 text-sm md:text-lg text-light rounded-2xl text-lg self-start">
                    {item.venue}
                  </span>
                </div>
                <span className="bg-[#191919] py-4 md:py-4 text-sm md:text-lg text-light rounded-2xl text-lg self-start">
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
