"use client";
import LoreCard from "@/components/LoreCard";
import { useEffect, useState } from "react";
import LoreType from "@/types/lore/loreType";
import { Lores } from "./data/data";

export default function Lore() {
  const [loreData, setLoreData] = useState<LoreType[]>(Lores);

  useEffect(() => {
    fetch("/api/lore")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLoreData(data);
        }
      });
  }, []);
  return (
    <>
      <div
        className={`flex justify-center mt-10 items-end pb-10  w-full h-55 p-5 text-5xl md:text-6xl bg-pbpages text-white`}
      >
        Our Lore
      </div>
      <div className="bg-pbpages flex px-5 justify-center w-full mb-10 md:mb-25  text-center">
        <p
          className={`text-pbtext font-light text-xl md:text-2xl lg:text-3xl max-w-300`}
        >
          Every line of code tells a story, but our greatest tales are written
          in the adventures we share. Here are the chronicles of our coding
          club's journeys, where friendship and innovation intertwine.
        </p>
      </div>

      {loreData.map((lore) => {
        return (
          <LoreCard
            key={lore.id}
            id={lore.id}
            title={lore.title}
            date={lore.date}
            location={lore.location}
            preview={lore.preview}
            images={lore.images}
            story={lore.story}
          />
        );
      })}
    </>
  );
}
