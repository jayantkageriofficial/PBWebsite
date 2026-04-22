"use client";
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
  const isFlipEnabled = !!imageUrl;

  return (
    <div
      className={`relative touch-manipulation w-full group ${
        isFlipEnabled ? "perspective-[1000px] cursor-pointer" : ""
      }`}
      onClick={() => isFlipEnabled && onFlip?.()}
    >
      {isAdmin && (
        <div className="absolute top-2 right-2 z-30 flex gap-1.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit?.();
            }}
            className="p-1.5 rounded-full bg-pbgray border border-pbborder hover:border-pbgreen transition-colors"
            title="Edit"
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
            title="Delete"
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
        className={`
          relative transition-all duration-700 transform-3d w-full
          ${isFlipEnabled && isFlipped ? "rotate-y-180" : ""}
          hover:shadow-[0_0_20px_var(--color-pbgreen)] 
          hover:border-pbgreen/40 rounded-3xl
        `}
      >
        <div
          className={`
            relative flex flex-col items-center backface-hidden
            w-full rounded-3xl border border-pbborder bg-pbpages p-3
            z-2
          `}
        >
          {imageUrl && (
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shrink-0">
              <Image
                src={imageUrl}
                alt={name}
                fill
                className="rounded-2xl object-cover object-center"
              />
            </div>
          )}
          <div className="flex justify-center mt-3 mb-1">
            <div className="flex flex-col items-center justify-center gap-1.5 w-full h-fit">
              <span className="text-pbgreen font-light whitespace-nowrap bg-pbdarkgray w-fit h-fit text-center rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base border border-pbborder capitalize">
                {name}
              </span>
              {!isFlipEnabled && (
                <p className="text-pbtext text-lexend font-light text-center text-lg sm:text-lg leading-[1.4] h-7">
                  {role}
                </p>
              )}
            </div>
          </div>
        </div>

        {isFlipEnabled && (
          <div
            className={`
              absolute inset-0 w-full h-full backface-hidden rotate-y-180
              rounded-3xl border border-pbgreen bg-pbpages p-4 sm:p-5 md:p-6
              flex flex-col items-center justify-center text-center z-1
            `}
          >
            <h3 className="text-pbgreen text-xl sm:text-2xl font-medium mb-2">
              {name}
            </h3>
            {leadDesc ? (
              <p className="text-white text-base sm:text-lg font-light mb-1">
                {leadDesc}
              </p>
            ) : (
              <>
                <p className="text-white text-base sm:text-lg font-light mb-1">
                  {role}
                </p>
                {company && (
                  <p className="text-gray-400 text-xs sm:text-sm font-light mb-4 italic">
                    @{company}
                  </p>
                )}
              </>
            )}

            {linkedInUrl && (
              <div className="mt-6 sm:mt-8 pt-4 border-t border-pbborder w-full flex justify-center">
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
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
