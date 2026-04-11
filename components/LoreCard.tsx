"use client";
import { Lore } from "@/types/lore/loreType";
import Image from "next/image";
import { useState } from "react";

export default function LoreCard({
  title,
  date,
  location,
  preview,
  images,
}: Lore) {
  const [currentImg, setCurrentImg] = useState<number>(0);
  const [imageActive, setImageActive] = useState<boolean>(false);


  return (
    <div className="w-full flex justify-center min-h-93 mb-10 bg-[#111111]">
      <div className="w-280 flex bg-[#1C1C1C] min-h-93">
        <div className="h-full w-[50%]">
          <div className="min-h-18 w-full pt-8 pl-12.5 ">
            <h1 className="text-5xl text-[#37FF00] font-medium">{title}</h1>
          </div>

          <div className="h-7.5 mt-4 flex w-full pl-12.5 ">
            <div className="bg-[#1A1A1A] mr-6 border border-[#262626] rounded-4xl px-3 flex items-center ">
              <img src="/lores/DateIcon.svg" className="mr-2" />
              <p className={`text-[#B3B3B3] font-light text-xs`}>
                {new Date(date).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#262626] rounded-4xl px-3 flex items-center ">
              <img src="/lores/location.svg" className="mr-2" />
              <p className={`text-[#B3B3B3] font-light text-xs`}>{location}</p>
            </div>
          </div>

          <div className="min-h-18 w-full pl-12.5 pt-4">
            <p className="text-[1.1rem] min-h-18 max-w-116 text-[#B3B3B3] font-light">
              {preview}
            </p>
          </div>

          <div className="pl-12.5 h-14 w-full mt-11 mb-5">
            <button className="bg-pbsurface border border-[#37ff0014] cursor-pointer h-14  w-49.5 rounded-2xl text-center select-none text-white text-[1.1rem]">
              Read More
            </button>
          </div>
        </div>

        <div className="flex justify-center overflow-hidden items-center relative h-full w-[50%]">
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
            className="h-83 w-lg overflow-hidden relative rounded-sm bg-cover bg-center"
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
                      className={`h-4 w-4 rounded-4xl ${currentImg == idx ? "bg-pbgreen" : "bg-[#B3B3B3]"} mr-2`}
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
                <img src="/lores/left_arrow.svg" className="h-4 w-4" />
              </button>

              <button
                className="absolute hover:bg-pbgreen/80 cursor-pointer bg-pbgreen/70 h-6 w-6 rounded-4xl right-2 top-[50%] flex justify-center items-center translate-y-[-50%] z-10 "
                onClick={() => {
                  setCurrentImg((curr) => {
                    return (curr + 1) % images.length;
                  });
                }}
              >
                <img src="/lores/right_arrow.svg" className="h-4 w-4" />
              </button>
            </div>

            <Image
              src={images[currentImg]}
              alt={location}
              fill
              className="w-full h-full object-cover grayscale-100"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
