"use client";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import talks1 from "@/public/talks1.jpg";
import { motion } from "framer-motion";

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

  const headingText = "We Speak. We Share. We Lead.";
  const phrases = headingText.split(". ");

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000); // match animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-pbblack rounded-xl text-white py-8 md:py-12 text-lexend-300 min-h-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 text-center">
        {/* Heading */}
        <div className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6 px-4 md:px-10 flex flex-wrap justify-center gap-2">
          {phrases.map((phrase, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 6, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1,
                delay: idx * 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {phrase}
              {idx < phrases.length - 1 ? "." : ""}
            </motion.span>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-gray-400 text-base md:text-lg lg:text-xl text-lexend-300 font-light mb-6"
        >
          A showcase of talks and conferences by the talented members of
          <br />
          Point Blank.
        </motion.p>

        <div
          className={`transition-opacity duration-700 ${
            showContent ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 py-4 md:py-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-5 py-1.5 md:py-2.5 rounded-full text-sm md:text-base uppercase cursor-pointer
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

          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-pbgray rounded-xl max-w-7xl mx-auto flex justify-center mb-6 px-2 md:px-6 lg:px-8"
            >
              <div className="flex flex-col lg:flex-row items-center py-4">
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-full lg:w-150 aspect-3/2 overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={240}
                      height={160}
                      className="object-contain rounded-xl w-full h-full"
                    />
                  </div>
                  <span className="text-pbgreen text-light font-lexend-300 mt-3 bg-black/40 rounded-full px-3 p-3">
                    {item.author}
                  </span>
                </div>

                <div className="flex flex-col items-start w-full h-full px-4 md:px-8 lg:px-12 py-6 lg:py-8">
                  <div className="mb-4">
                    <h2 className="text-pbgreen font-medium text-2xl md:text-3xl lg:text-3xl leading-snug mb-2 max-w-2xl text-left wrap-break-word">
                      {item.title}
                    </h2>

                    <p className="text-gray-400 text-sm md:text-base leading-snug max-w-xl md:leading-normal text-left wrap-break-word">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-2 md:items-center md:justify-between py-2 md:py-3 md:px-2">
                    <div className="flex gap-3">
                      <span className="bg-pbsurface py-1.5 px-2 md:px-3 md:py-2 text-xs md:text-sm text-light rounded-2xl self-start">
                        {item.venue}
                      </span>
                    </div>
                    <span className="bg-pbsurface py-1.5 px-2 md:px-3 md:py-2 text-xs md:text-sm text-light rounded-2xl self-start">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
