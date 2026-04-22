"use client";

import Image, { StaticImageData } from "next/image";
import { LinkedIn } from "@/components/Icons";

interface Props {
  name: string;
  bio: string;
  img: StaticImageData;
  linkedin: string;
  isFlipped?: boolean;
  onFlip?: () => void;
}

export default function FoundingMemberCard({
  name,
  bio,
  img,
  linkedin,
  isFlipped,
  onFlip,
}: Props) {
  return (
    <div
      className="relative touch-manipulation w-full perspective-[1000px] cursor-pointer h-full"
      onClick={() => onFlip?.()}
    >
      <div
        className={`relative transition-all duration-700 transform-3d h-full ${
          isFlipped ? "transform-[rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="backface-hidden flex flex-col items-center w-full h-full rounded-3xl border border-pbborder hover:border-pbgreen transition-all bg-pbpages p-3">
          <div className="relative w-full aspect-square rounded-4xl overflow-hidden shrink-0">
            <Image
              src={img}
              alt={name}
              fill
              className="rounded-4xl object-cover object-top"
              draggable={false}
            />
          </div>
          <div className="flex justify-center mt-3 mb-1 w-full">
            <div className="flex flex-col items-center justify-center gap-1.5 w-full">
              <span className="text-pbgreen font-light whitespace-nowrap bg-pbdarkgray w-fit text-center rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base border border-pbborder capitalize">
                {name}
              </span>
              <p className="text-pbtext font-light text-center text-sm leading-relaxed px-1 pb-1">
                {bio}
              </p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="
            absolute inset-0 w-full h-full backface-hidden transform-[rotateY(180deg)]
            rounded-3xl border border-pbgreen bg-pbpages p-4 sm:p-5 md:p-6
            flex flex-col items-center justify-center text-center
          "
        >
          <h3 className="text-pbgreen text-xl sm:text-2xl font-medium mb-2">
            {name}
          </h3>
          <p className="text-white/50 text-xs sm:text-sm italic mb-3">
            Founding Member
          </p>
          <p className="text-white text-sm sm:text-base font-light leading-relaxed">
            {bio}
          </p>
          {linkedin && (
            <div className="mt-6 sm:mt-8 pt-4 border-t border-pbborder w-full flex justify-center">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:scale-110 transition-transform"
              >
                <LinkedIn className="h-10 w-10 text-white hover:text-pbgreen" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
