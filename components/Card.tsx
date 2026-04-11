"use client";
import Image from 'next/image';
import { useState } from 'react';
import { Lexend } from "next/font/google";
import { FaLinkedin } from "react-icons/fa";

interface CardProps {
    name: string;
    role: string;
    company: string;
    linkedInUrl?: string;
    imageUrl?: string;
}

const lexend = Lexend({ subsets: ["latin"], weight: ["200", "300", "400", "500"] });

const Card: React.FC<CardProps> = ({ name, role, company, linkedInUrl, imageUrl }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    
   
    const isFlipEnabled = !!(imageUrl && linkedInUrl);

    return (
        <div 
            className={`relative touch-manipulation ${
                isFlipEnabled ? '[perspective:1000px] cursor-pointer' : ''
            }`}
            onClick={() => isFlipEnabled && setIsFlipped(!isFlipped)}
        >
            <div 
                className={`relative transition-all duration-700 [transform-style:preserve-3d] ${
                    isFlipEnabled && isFlipped ? '[transform:rotateY(180deg)]' : ''
                }`}
            >
                
                
                <div className={`
                    ${isFlipEnabled ? '[backface-visibility:hidden]' : ''} 
                    flex flex-col 
                    ${imageUrl && linkedInUrl 
                        ? 'md:w-103.5 w-75 md:h-116.5 rounded-[40px] border-[1.25px] border-[#262626]' 
                        : 'md:w-66.5 h-fit rounded-[20px]'
                    } 
                    p-6 
                    ${!imageUrl && !linkedInUrl ? 'border-0 bg-[#1C1C1C]' : 'bg-[#111111]'} 
                    gap-5
                `}>
                    {imageUrl && linkedInUrl && (
                        <div className="relative w-full aspect-square rounded-[30px] overflow-hidden flex-shrink-0">
                            <Image
                                src={imageUrl}
                                alt={name}
                                fill
                                style={{ objectFit: 'cover' }}
                                className="rounded-[30px]"
                            />
                        </div>
                    )}
                    <div className='flex justify-center'>
                        <div className="flex flex-col items-center justify-center gap-1.5 md:w-41.75 h-fit">
                            <span className="text-pbgreen font-light whitespace-nowrap bg-[#1A1A1A] w-fit h-fit text-center rounded-full px-6 py-2 border border-[#262626]">
                                {name}
                            </span>
                            {!isFlipEnabled && (
                                <p className={`text-[#B3B3B3] text-lexend font-light  text-center text-[17px] text-center leading-[1.4] md:w-34.75 h-7`}>
                                    {role}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                
                {isFlipEnabled && (
                    <div className={`
                        absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]  
                        rounded-[40px] border-[1.25px] border-pbgreen bg-[#111111] p-6 
                        flex flex-col items-center justify-center text-center
                    `}>
                        <h3 className="text-pbgreen text-2xl font-medium mb-2">{name}</h3>
                        <p className="text-white text-lg font-light mb-1">{role}</p>
                        {company && (
                            <p className="text-gray-400 text-sm font-light mb-4 italic">@{company}</p>
                        )}
                        
                        <div className="mt-8 pt-4 border-t border-[#262626] w-full flex justify-center">
                           <a 
                             href={linkedInUrl} 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             onClick={(e) => e.stopPropagation()}
                             className="hover:scale-110 transition-transform"
                           >
                             <FaLinkedin className='h-10 w-10 text-white hover:text-pbgreen'/>
                           </a> 
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;