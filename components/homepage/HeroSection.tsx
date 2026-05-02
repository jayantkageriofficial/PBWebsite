"use client";

import { Lexend_Tera } from "next/font/google";
import ThreeBackground from "@/components/ui/ThreeBackground";
import { motion } from "framer-motion";
import GsocCard from "@/components/ui/GsocCard";

const lexendTera = Lexend_Tera({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const headingParts = [
  { text: "We Are ", className: "bg-linear-to-b px-1.5 from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent  font-semibold" },
  { text: " <. >", className: "text-pbgreen font-semibold font-mono" },
  { br: true },
  { text: " Point ", className: "text-pbgreen font-semibold" },
  { text: "Blank", className: "font-semibold px-1.5 bg-linear-to-b from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent" },
  {
    text: "Student run Open Source Community from India",
    className: "text-base text-white italic pt-2",
    block: true,
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-[90vh] overflow-hidden cursor-grab text-white bg-pbpages"
    >
      <ThreeBackground />
      <div className="flex justify-center lg:justify-between items-center absolute inset-0 flex-col lg:flex-row gap-6 lg:gap-10 px-4 sm:px-10 lg:pl-24 lg:pr-10 xl:pr-16 pt-20 lg:pt-0 max-w-[105rem] mx-auto w-full">
        <h1
          className={`text-5xl sm:text-7xl text-center lg:text-left tracking-[-22%] text-white p-5 rounded-4xl select-none ${lexendTera.className}`}
        >
          {headingParts.map((part, idx) =>
            part.br ? (
              <br key={idx} />
            ) : (
              <motion.span
                key={idx}
                className={part.className}
                initial={{ opacity: 0, y: 6, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.022,
                }}
                style={{ display: part.block ? "block" : "inline" }}
              >
                {part.text}
              </motion.span>
            ),
          )}
        </h1>
        <div className="w-full max-w-xl xl:max-w-2xl 2xl:max-w-3xl z-20 shrink-0">
          <GsocCard />
        </div>
      </div>
    </section>
  );
}
