import React, { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import { BiSolidChevronsUp,BiSolidChevronsDown } from "react-icons/bi";
import { Lexend } from "next/font/google";

interface CollapsibleSectionProps {
    heading: string;
    content: JSX.Element;
    isOpen: boolean;
    onToggle: () => void;
}
const lexend = Lexend({ subsets: ["latin"] ,weight:["300","400","500"]});
const CollapsibleSection = forwardRef<HTMLDivElement, CollapsibleSectionProps>(
    ({ heading, content, isOpen, onToggle }, ref) => {
        const localRef = useRef<HTMLDivElement | null>(null);

        useImperativeHandle(ref, () => localRef.current!);

        useEffect(() => {
            if (isOpen && localRef.current) {

                const offset = 200; // Adjust this value to match the height of your navbar
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = localRef.current.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });

            }
        }, [isOpen]);


        return (
            <div className="" ref={localRef}>
                <div
                    onClick={(e) => {
                        e.preventDefault();
                        onToggle();
                    }}
                    tabIndex={-1}
                    className="flex items-center justify-between p-4 cursor-pointer bg-black text-white"
                >
                    <h2 className={`${isOpen ? ' text-[#37FF00]' : 'text-[#FFFFFF]'} text-[64px] font-lexend font-normal leading-[150%]`}>
                        {heading}
                    </h2>

                    {isOpen ? (
                        <BiSolidChevronsUp className="w-14 h-14 text-pbgreen" />
                    ) : (
                        <BiSolidChevronsDown className="w-14 h-14 text-white" />
                    )}
                </div>
                {isOpen && (
                    <div className="p-4 bg-black">
                        {content}
                    </div>
                )}
            </div>
        );
    }
);

CollapsibleSection.displayName = 'CollapsibleSection';

export default CollapsibleSection;