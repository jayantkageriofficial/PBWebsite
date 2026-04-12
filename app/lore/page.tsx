"use client";
import LoreCard from "@/components/lore/LoreCard";
import { useEffect, useState } from "react";
import LoreType from "@/types/lore/loreType";
import LoadingBrackets from "../loading";
import { useAuthStore } from "@/lib/store/auth";
export default function Lore() {
  const [loreData, setLoreData] = useState<LoreType[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const { authenticated, token } = useAuthStore();


  useEffect(() => {
    setLoading(true);
    fetch("/api/lore")
      .then((res) => res.json())
      .then((data: LoreType[]) => {
        if (data.length != 0) {
          data = data.sort((j, i) => {
            return new Date(i.date).getTime() - new Date(j.date).getTime();
          });
          setLoreData(data);
        }
      })
      .catch((err) => {
        console.log("Error Fetching Lores :", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return isLoading ? (
    <LoadingBrackets />
  ) : (
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
          club&apos;s journeys, where friendship and innovation intertwine.
        </p>
      </div>

      {true && (<>
        <div className="w-full relative flex justify-center mb-6">
          <button className="h-15 rounded-4xl w-90 text-2xl text-center text-white cursor-pointer bg-pbgray">
            + Add Lore (Admin)
          </button>
        </div>
        <div className="absolute">

        </div>
        </>

      )}
      {loreData.map((lore) => {
        return (
          <LoreCard
            key={lore._id}
            _id={lore._id}
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
