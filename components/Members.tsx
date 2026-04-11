"use client";

import { useState } from "react";
import Card from "@/components/MembersCard";
import CollapsibleSection from "@/components/Collapsible";

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
];

const sampleMembersData: { [key: string]: Member[] } = {
  "Current Leads": [
    {
      name: "Aisha Khan",
      role: "President",
      year: "Fourth Year",
      company: "Google",
      linkedInUrl: "https://linkedin.com",
      imageUrl:
        "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_fill,g_face/v1615582317/docs/models.jpg",
    },
    {
      name: "Rahul Gupta",
      role: "Technical Lead",
      year: "Third Year",
      linkedInUrl: "https://linkedin.com",
      imageUrl:
        "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
    },
    {
      name: "Neha Sharma",
      role: "Design Lead",
      year: "Third Year",
      linkedInUrl: "https://linkedin.com",
      imageUrl:
        "https://res.cloudinary.com/demo/image/upload/v1652343874/docs/demo_image2.jpg",
    },
  ],
  "Alumni Leads": [
    { name: "Priya Patel", role: "Former President", year: "Alumni" },
    { name: "Vikram Singh", role: "Former Tech Lead", year: "Alumni" },
    { name: "Sneha Rao", role: "Former Design Lead", year: "Alumni" },
    { name: "Arvind Kumar", role: "Former Events Head", year: "Alumni" },
    { name: "Rishabh Jain", role: "Former CP Lead", year: "Alumni" },
    { name: "Pooja Hegde", role: "Former Operations Lead", year: "Alumni" },
  ],
  Alumni: [
    { name: "Ananya Desai", role: "Member", year: "Alumni" },
    { name: "Karan Verma", role: "Member", year: "Alumni" },
    { name: "Riya Kapoor", role: "Member", year: "Alumni" },
    { name: "Yash Agarwal", role: "Core Member", year: "Alumni" },
    { name: "Tanvi Shetty", role: "Core Member", year: "Alumni" },
    { name: "Aditi Sharma", role: "Member", year: "Alumni" },
    { name: "Pranav Joshi", role: "Member", year: "Alumni" },
    { name: "Kavya Iyer", role: "Member", year: "Alumni" },
    { name: "Mukul Garg", role: "Member", year: "Alumni" },
    { name: "Ritika Singh", role: "Member", year: "Alumni" },
    { name: "Gaurav Malhotra", role: "Member", year: "Alumni" },
    { name: "Shreya Ghoshal", role: "Member", year: "Alumni" },
  ],
  "Fourth Year": [
    {
      name: "Aditya Jain",
      role: "Executive",
      year: "Fourth Year",
      linkedInUrl: "https://linkedin.com",
      imageUrl:
        "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_fill/v1652366604/docs/demo_image3.jpg",
    },
    {
      name: "Sanya Arora",
      role: "Executive",
      year: "Fourth Year",
      linkedInUrl: "https://linkedin.com",
      imageUrl:
        "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_fill,g_face/v1615582317/docs/models.jpg",
    },
  ],
  "Third Year": [
    {
      name: "Rohan Mehta",
      role: "Core Member",
      year: "Third Year",
      linkedInUrl: "https://linkedin.com",
      imageUrl:
        "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
    },
    {
      name: "Ishaan Reddy",
      role: "Core Member",
      year: "Third Year",
      linkedInUrl: "https://linkedin.com",
      imageUrl:
        "https://res.cloudinary.com/demo/image/upload/v1652343874/docs/demo_image2.jpg",
    },
    {
      name: "Kritika Das",
      role: "Core Member",
      year: "Third Year",
      linkedInUrl: "https://linkedin.com",
      imageUrl:
        "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_fill/v1652366604/docs/demo_image3.jpg",
    },
  ],
  "Second Year": [
    {
      name: "Dev Joshi",
      role: "Junior Member",
      year: "Second Year",
      linkedInUrl: "https://linkedin.com",
      imageUrl:
        "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_fill,g_face/v1615582317/docs/models.jpg",
    },
    {
      name: "Meera Nair",
      role: "Junior Member",
      year: "Second Year",
      linkedInUrl: "https://linkedin.com",
      imageUrl:
        "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
    },
  ],
  "First Year": [
    {
      name: "Arjun Bhat",
      role: "Fresher",
      year: "First Year",
      linkedInUrl: "https://linkedin.com",
      imageUrl:
        "https://res.cloudinary.com/demo/image/upload/v1652343874/docs/demo_image2.jpg",
    },
    {
      name: "Tara Menon",
      role: "Fresher",
      year: "First Year",
      linkedInUrl: "https://linkedin.com",
      imageUrl:
        "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_fill/v1652366604/docs/demo_image3.jpg",
    },
    {
      name: "Kabir Sen",
      role: "Fresher",
      year: "First Year",
      linkedInUrl: "https://linkedin.com",
      imageUrl:
        "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_fill,g_face/v1615582317/docs/models.jpg",
    },
    {
      name: "Zara Ali",
      role: "Fresher",
      year: "First Year",
      linkedInUrl: "https://linkedin.com",
      imageUrl:
        "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
    },
  ],
};

export default function Members() {
  const [openIndex, setOpenIndex] = useState<number>(
    headings.indexOf("Current Leads"),
  );
  const [data] = useState(sampleMembersData);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const isAnyOpen = openIndex !== -1;

  return (
    <div className="flex flex-col justify-center items-center w-full h-full space-y-4 mt-24 bg-pbpages">
      <div className="flex items-center justify-center gap-4 mb-12">
        <h1 className="text-lexend font-normal md:text-[64px] text-[40px] leading-tight">
          <span className="text-[#37FF00]">{"<. > "}</span>
          <span className="text-white">Members</span>
        </h1>
      </div>
      <div className="w-full max-w-8xl px-4  md:mt-24 mt-8">
        <div className="rounded-[20px] overflow-hidden">
          {headings.map((heading, index) => (
            <div
              key={index}
              className={`transition-colors duration-500 ${
                index !== 0
                  ? isAnyOpen
                    ? "border-t border-transparent"
                    : "border-t border-[#B3B3B3]"
                  : "border-t border-transparent"
              }`}
            >
              <CollapsibleSection
                heading={heading}
                isOpen={openIndex === index}
                isAnySectionOpen={isAnyOpen}
                onToggle={() => handleToggle(index)}
                content={
                  <div className="flex flex-col items-center space-y-6 w-full pt-4 pb-8 bg-pbpages">
                    <div
                      className={`grid justify-items-center gap-y-12 gap-x-9 w-full ${
                        heading.toLowerCase().includes("alumni")
                          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                      }`}
                    >
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
            </div>
          ))}
        </div>
      </div>
      <div className="h-24 w-full shrink-0"></div>
    </div>
  );
}
