"use client"

import { useState } from "react";
import Card from "./Card";
import CollapsibleSection from "./Collapsible";
import { FaEllipsisV, FaRegBell } from "react-icons/fa";

interface Member {
  id?: string;
  name: string;
  role: string;
  company?: string;
  year: string;
  linkedInUrl?: string;
  imageUrl?: string;
}

const headings = [
  "Current Leads",
  "Alumni Leads",
  "Alumni",
  "Fourth Year",
  "Third Year",
  "Second Year",
  "First Year",
]

export default function Members() {
  const [openIndex, setOpenIndex] = useState<number>(
    headings.indexOf("Current Leads")
  );
  
  const [data, setData] = useState<{ [key: string]: Member[] }>({});
  
  const [menuVisible, setMenuVisible] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const toggleMenu = (id: string) => {
    setMenuVisible((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-col justify-center items-center w-full space-y-4 mt-24 bg-black">
      <div className="space-y-2 w-full max-w-7xl px-4 ">
        {headings.map((heading, index) => (
          <CollapsibleSection
            key={index}
            heading={heading}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
            content={
              <div className="flex flex-col items-center space-y-6 w-full pt-4 ">
                <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-20 justify-items-center">
                 ${
            heading.toLowerCase().includes("alumni")
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-15" 
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}>
                  {data[heading]?.map((profile, cardIndex) => (
                    <div key={cardIndex} className="relative">
                      <Card
                        name={profile.name}
                        role={profile.role}
                        company={profile.company || ""}
                        linkedInUrl={profile.linkedInUrl || ""}
                        imageUrl={profile.imageUrl || ""}
                      />
                    </div>
                  ))}

                </div>
              </div>
            }
          />
        ))}
      </div>
      <div className="h-24 w-full flex-shrink-0"></div>
    </div>
  );
}