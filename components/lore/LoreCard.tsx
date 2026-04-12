"use client";

import { useState } from "react";
import LoreType from "@/types/lore/loreType";
import Image from "next/image";
import LoreStoryCard from "@/components/lore/LoreStoryCard";
import { CalendarDays, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

export default function LoreCard({
  _id,
  title,
  date,
  location,
  preview,
  images,
  story,
}: LoreType) {
  const [currentImg, setCurrentImg] = useState<number>(0);
  const [imageActive, setImageActive] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <>
      <div
        className={`w-full flex justify-center min-h-93 px-4 sm:px-6 ${expanded ? "" : "mb-6 md:mb-10"} bg-pbpages`}
      >
        <div className="w-full max-w-280 flex flex-col-reverse md:flex-row bg-[#1C1C1C] min-h-93a">
          <div className="w-full md:w-[50%]">
            <div className="min-h-18 w-full pt-8 pl-5 md:pl-12.5 ">
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#37FF00] font-medium">
                {title}
              </h1>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 w-full pl-5 md:pl-12.5">
              <div className="bg-pbdarkgray py-1.5 mr-6 border border-pbborder rounded-4xl px-3 flex items-center ">
                <CalendarDays
                  className="mr-2 h-4 w-4 text-pbtext"
                  aria-hidden="true"
                />
                <p className={`text-pbtext font-light text-xs`}>
                  {new Date(date).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="bg-pbdarkgray py-1.5 border border-pbborder rounded-4xl px-3 flex items-center ">
                <MapPin
                  className="mr-2 h-4 w-4 text-pbtext"
                  aria-hidden="true"
                />
                <p className={`text-pbtext font-light text-xs`}>{location}</p>
              </div>
            </div>

            <div className="min-h-18 w-full pl-6 md:pl-12.5 pt-4">
              <p className="text-[1.1rem] min-h-18 max-w-full md:max-w-116 text-pbtext font-light">
                {preview}
              </p>
            </div>

            <div className="md:pl-12.5 p-0 h-14 w-full mt-11 mb-5 flex justify-center sm:justify-start">
              <button
                className="bg-pbsurface border border-[#37ff0014] cursor-pointer h-14  w-49.5 rounded-2xl text-center select-none text-white text-[1.1rem]"
                onClick={() => {
                  setExpanded((prev) => !prev);
                }}
              >
                {expanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-4 md:mt-0 overflow-hidden items-center relative min-h-64 md:h-full w-full md:w-[50%]">
            {/* Dotted Background */}
            <div
              className="absolute top-0 translate-y-[-50%] translate-x-[50%] right-0 w-170 h-200 z-0 pointer-events-none 
            bg-[radial-gradient(circle,rgba(55,255,0,0.6)_1px,transparent_2px)] 
            bg-size-[11px_11px] 
            mask-[radial-gradient(circle,transparent_15%,black_40%,transparent_50%)]
            [-webkit-mask-image:radial-gradient(circle,transparent_15%,black_40%,transparent_60%)]"
            />
            {/* Dotted Background */}

            <div
              className="h-64 md:h-83 w-[90%] md:w-lg overflow-hidden relative rounded-sm bg-cover bg-center"
              onMouseLeave={() => {
                setImageActive(false);
              }}
              onMouseEnter={() => {
                setImageActive(true);
              }}
            >
              <div
                className={`w-full h-full absolute ${imageActive ? "" : "hidden"}`}
              >
                <div className="absolute w-full bottom-0 flex justify-center items-center h-13 z-10">
                  {images.map((_, idx) => {
                    return (
                      <div
                        key={idx}
                        className={`h-4 w-4 rounded-4xl ${currentImg == idx ? "bg-pbgreen" : "bg-pbtext"} mr-2`}
                      ></div>
                    );
                  })}
                </div>
                <button
                  className="absolute hover:bg-pbgreen/80 cursor-pointer bg-pbgreen/70 h-6 w-6 rounded-4xl top-[50%] flex justify-center items-center translate-y-[-50%] left-2 z-10 "
                  onClick={() => {
                    setCurrentImg((curr) => {
                      return (curr - 1 + images.length) % images.length;
                    });
                  }}
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>

                <button
                  className="absolute hover:bg-pbgreen/80 cursor-pointer bg-pbgreen/70 h-6 w-6 rounded-4xl right-2 top-[50%] flex justify-center items-center translate-y-[-50%] z-10 "
                  onClick={() => {
                    setCurrentImg((curr) => {
                      return (curr + 1) % images.length;
                    });
                  }}
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <Image
                src={images[currentImg]}
                alt={location}
                fill
                className="w-full h-full object-cover grayscale-100"
                priority
                sizes="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      {expanded && (
        <div className="animate-in slide-in-from-top-5  duration-700">
          <LoreStoryCard key={_id} stories={story} />
        </div>
      )}
    </>
  );
}
