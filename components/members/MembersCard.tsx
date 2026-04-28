"use client";
import React from "react";
import Image from "next/image";
import { LinkedIn } from "@/components/Icons";

interface CardProps {
  name: string;
  role: string;
  company: string;
  linkedInUrl?: string;
  imageUrl?: string;
  leadDesc?: string;
  isAdmin?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  isFlipped?: boolean;
  onFlip?: () => void;
}

const Card: React.FC<CardProps> = ({
  name,
  role,
  company,
  linkedInUrl,
  imageUrl,
  leadDesc,
  isAdmin,
  onEdit,
  onDelete,
  isFlipped,
  onFlip,
}) => {
  const hasImage = imageUrl;
  return (
    <div
      className={`relative touch-manipulation w-full group cursor-pointer ${
        !hasImage ? "h-fit" : ""
      }`}
      style={{ perspective: "1000px" }}
      onClick={() => onFlip?.()}
    >
      {isAdmin && (
        <div className="absolute top-2 right-2 z-50 flex gap-1.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit?.();
            }}
            className="p-1.5 rounded-full bg-pbgray border border-pbborder hover:border-pbgreen transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 text-pbtext hover:text-pbgreen"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.();
            }}
            className="p-1.5 rounded-full bg-pbgray border border-pbborder hover:border-red-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 text-pbtext hover:text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6M14 11v6" />
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
            </svg>
          </button>
        </div>
      )}

      <div
        className={`relative w-full h-full transition-all duration-700 transform-3d ${
          !hasImage && isFlipped ? "transform-[rotateY(180deg)]" : ""
        }`}
      >
        <div
          className={`relative flex flex-col w-full rounded-3xl border border-pbborder hover:border-pbgreen bg-pbpages p-3 backface-hidden ${
            isFlipped  ? "border-pbgreen" : ""
          } `}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {hasImage && (
            <div className="relative w-full aspect-square perspective-[1000px] shrink-0">
              <div
                className={`relative w-full h-full transition-all duration-700 transform-3d ${
                  isFlipped ? "transform-[rotateY(180deg)]" : ""
                }`}
              >
                <div
                  className="absolute inset-0 z-10 overflow-hidden rounded-2xl backface-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className="object-cover object-center"
                    draggable={false}
                  />
                </div>

                <div
                  className="absolute inset-0 w-full h-full backface-hidden transform-[rotateY(180deg)] rounded-2xl border border-pbborder bg-pbpages p-4 flex flex-col items-center justify-center text-center z-20"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  {linkedInUrl && (
                    <div className="hover:scale-110 transition-transform mb-2">
                      <LinkedIn className="h-8 w-8 text-pbgreen" />
                    </div>
                  )}
                  <p className="text-white text-sm font-light mb-1">
                    {leadDesc || role}
                  </p>
                  {company && (
                    <p className="text-pbgreen text-xs">@{company}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div
            className={`flex flex-col items-center justify-center gap-1.5 w-full mb-1 ${
              hasImage ? "mt-3" : "mt-2"
            }`}
          >
            <span className="text-pbgreen font-light whitespace-nowrap bg-pbdarkgray w-fit h-fit text-center rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base border border-pbborder capitalize">
              {name}
            </span>

            {!hasImage && (
              <p className="text-pbtext font-light text-center text-sm mt-1">
                {role}
              </p>
            )}
          </div>
        </div>

        {!hasImage && (
          <div
            className="absolute inset-0 w-full h-full backface-hidden transform-[rotateY(180deg)] rounded-3xl border border-pbgreen bg-pbpages p-6 flex flex-col items-center justify-center text-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {linkedInUrl && (
              <div className="hover:scale-110 transition-transform mb-4">
                <LinkedIn className="h-10 w-10 text-pbgreen" />
              </div>
            )}
            {company && <p className="text-pbgreen text-[17px]">@{company}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
