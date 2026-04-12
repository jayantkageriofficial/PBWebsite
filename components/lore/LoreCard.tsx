"use client";

import { useState } from "react";
import LoreType from "@/types/lore/loreType";
import Image from "next/image";
import LoreStoryCard from "@/components/lore/LoreStoryCard";
import { CalendarDays, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

type LoreCardProps = LoreType & {
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function LoreCard({
  _id,
  title,
  date,
  location,
  preview,
  images,
  story,
  onEdit,
  onDelete,
}: LoreCardProps) {
  const [currentImg, setCurrentImg] = useState<number>(0);
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <>
      <div
        className={`w-full flex justify-center min-h-93 px-4 sm:px-6 ${expanded ? "" : "mb-6 md:mb-10"} bg-pbpages`}
      >
        <div className="w-full max-w-280 flex flex-col-reverse md:flex-row bg-[#1C1C1C] min-h-93a rounded-2xl overflow-hidden">
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

            <div className="md:pl-12.5 p-0 h-14 w-full mt-11 mb-5 flex flex-wrap items-center gap-3 justify-center sm:justify-start">
              <button
                className="bg-pbsurface border border-[#37ff0014] cursor-pointer h-14 w-49.5 rounded-2xl text-center select-none text-white text-[1.1rem]"
                onClick={() => setExpanded((prev) => !prev)}
              >
                {expanded ? "Read Less" : "Read More"}
              </button>

              {onEdit && (
                <button
                  onClick={onEdit}
                  className="px-3 py-1 text-xs bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
                >
                  Edit
                </button>
              )}
              {onDelete && (
                <button
                  onClick={onDelete}
                  className="px-3 py-1 text-xs bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-full transition-colors cursor-pointer"
                >
                  Delete
                </button>
              )}
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

            <div className="h-64 md:h-83 w-[90%] md:w-lg overflow-hidden relative rounded-xl bg-cover bg-center">
              {/* Prev button */}
              {images.length > 1 && (
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center h-7 w-7 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white transition-colors cursor-pointer"
                  onClick={() =>
                    setCurrentImg((curr) => (curr - 1 + images.length) % images.length)
                  }
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
              )}

              {/* Next button */}
              {images.length > 1 && (
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center h-7 w-7 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white transition-colors cursor-pointer"
                  onClick={() =>
                    setCurrentImg((curr) => (curr + 1) % images.length)
                  }
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              )}

              {/* Pagination dots */}
              {images.length > 1 && (
                <div className="absolute bottom-3 w-full flex justify-center items-center gap-1.5 z-10">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImg(idx)}
                      className={`rounded-full transition-all cursor-pointer ${
                        currentImg === idx
                          ? "w-4 h-2 bg-white"
                          : "w-2 h-2 bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              )}

              {images.map((src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt={`${location} ${idx + 1}`}
                  fill
                  className={`w-full h-full object-cover grayscale-100 transition-opacity duration-700 ease-in-out ${
                    idx === currentImg ? "opacity-100" : "opacity-0"
                  }`}
                  priority={idx === 0}
                  sizes="w-full"
                />
              ))}
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
