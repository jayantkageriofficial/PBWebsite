"use client";
import Image from "next/image";
import { useState } from "react";
import { Lexend } from "next/font/google";
import { LinkedIn } from "@/components/Icons";

interface CardProps {
  name: string;
  role: string;
  company: string;
  linkedInUrl?: string;
  imageUrl?: string;
}

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

const Card: React.FC<CardProps> = ({
  name,
  role,
  company,
  linkedInUrl,
  imageUrl,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const isFlipEnabled = !!(imageUrl && linkedInUrl);

  return (
    <div
      className={`relative touch-manipulation w-full ${
        isFlipEnabled ? "perspective-[1000px] cursor-pointer" : ""
      }`}
      onClick={() => isFlipEnabled && setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative transition-all duration-700 transform-3d ${
          isFlipEnabled && isFlipped ? "transform-[rotateY(180deg)]" : ""
        }`}
      >
        <div
          className={`
            ${isFlipEnabled ? "backface-hidden" : ""} 
            flex flex-col 
            w-full
            ${
              imageUrl && linkedInUrl
                ? "max-w-75 sm:max-w-85 md:max-w-90 lg:max-w-95 xl:max-w-103.25 aspect-413/466 rounded-[40px] border border-[#262626]"
                : "max-w-60 h-fit rounded-[20px]"
            } 
            mx-auto
            p-4 sm:p-5 md:p-6
            ${!imageUrl && !linkedInUrl ? "border-0 bg-[#1C1C1C]" : "bg-pbpages"} 
            gap-4 sm:gap-5
          `}
        >
          {imageUrl && linkedInUrl && (
            <div className="relative w-full aspect-square rounded-[30px] overflow-hidden shrink-0">
              <Image
                src={imageUrl}
                alt={name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-[30px]"
              />
            </div>
          )}
          <div className="flex justify-center">
            <div className="flex flex-col items-center justify-center gap-1.5 w-full h-fit">
              <span className="text-pbgreen font-light whitespace-nowrap bg-[#1A1A1A] w-fit h-fit text-center rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base border border-[#262626]">
                {name}
              </span>
              {!isFlipEnabled && (
                <p
                  className={`text-[#B3B3B3] text-lexend font-light text-center text-[15px] sm:text-[17px] leading-[1.4] h-7`}
                >
                  {role}
                </p>
              )}
            </div>
          </div>
        </div>

        {isFlipEnabled && (
          <div
            className={`
              absolute inset-0 w-full h-full backface-hidden transform-[rotateY(180deg)]  
              max-w-75 sm:max-w-85 md:max-w-90 lg:max-w-95 xl:max-w-103.25
              mx-auto
              rounded-[40px] border border-pbgreen bg-pbpages p-4 sm:p-5 md:p-6
              flex flex-col items-center justify-center text-center
            `}
          >
            <h3 className="text-pbgreen text-xl sm:text-2xl font-medium mb-2">
              {name}
            </h3>
            <p className="text-white text-base sm:text-lg font-light mb-1">
              {role}
            </p>
            {company && (
              <p className="text-gray-400 text-xs sm:text-sm font-light mb-4 italic">
                @{company}
              </p>
            )}

            <div className="mt-6 sm:mt-8 pt-4 border-t border-[#262626] w-full flex justify-center">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:scale-110 transition-transform"
              >
                <LinkedIn className="h-10 w-10 text-white hover:text-pbgreen" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
