import { Metadata } from "next";
import { lexendTera } from "../page";
import LoreCard from "@/components/LoreCard";

export const metadata: Metadata = {
  title: "Lore",
  description: "The Lores of Point Blank",
};

export default async function Lore() {
  return (
    <>
      <div
        className={`flex justify-center mt-10 items-center ${lexendTera.className} tracking-[-17%]  w-full h-60 p-5 text-6xl bg-[#111111] text-white`}
      >
        Our Lore
      </div>
      <div className="bg-[#111111] flex justify-center w-full mb-25  text-center">
        <p className={`text-[#B3B3B3] font-light text-3xl max-w-300`}>
          Every line of code tells a story, but our greatest tales are written
          in the adventures we share. Here are the chronicles of our coding
          club's journeys, where friendship and innovation intertwine.
        </p>
      </div>
      <LoreCard/>
      
    </>
  );
}
