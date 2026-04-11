"use client";
import { useState } from "react";
import { Chocolate_Classical_Sans, Lexend } from "next/font/google";
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
    <section className="bg-pbblack rounded-xl text-white py-16 text-lexend-300  min-h-[90vh]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl  font-medium mb-6">
          We Speak. We Share. We Lead.
        </h1>
        <p className="text-gray-400 text-lexend-300 font-light mb-8">
          A showcase of talks and conferences by the talented members of{" "}
          <br></br>Point Blank.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12 ">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm capitalize
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
          className="bg-pbgray rounded-xl max-w-[920px]  mx-auto   flex justify-center mb-6 "
        >
          <div className="flex py-4">
            <div className="flex flex-col items-center">
              <div className="w-80 h-60 overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={240}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-pbgreen text-light font-lexemnd-300 mt-3 bg-black/40 rounded-full px-3 py-1">
                {item.author}
              </span>
            </div>

            <div className="flex flex-col flex-1 px-9">
              <div className="mb-4">
                <h2 className="text-pbgreen  font-medium text-2xl leading-snug mb-2 max-w-130">
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
