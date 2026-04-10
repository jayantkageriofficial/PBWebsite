import Image from 'next/image';
import { Lexend } from "next/font/google";
interface CardProps {
    name: string;
    role: string;
    company: string;
    linkedInUrl?: string;
    imageUrl?: string;
}
const lexend = Lexend({ subsets: ["latin"] ,weight:["200","300","400","500"]});

const Card: React.FC<CardProps> = ({ name, role, company, linkedInUrl, imageUrl }) => {
     
     return(
       <div className={`flex flex-col ${imageUrl && linkedInUrl ? 'w-103.5  h-116.5 rounded-[40px] border-[1.25px] border-[#262626]' : 'w-66.5 h-fit rounded-[20px] '}  p-6  ${!imageUrl && !linkedInUrl ? 'border-0 bg-[#1C1C1C]':''} mt-5 mb-5 gap-5`}>
            {imageUrl && linkedInUrl && (
                <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-90 h-90 rounded-[30px]"
                >
                    <Image
                        src={imageUrl}
                        alt={name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="w-90 h-90 rounded-[30px]"
                    />
                </a>
            )}
            <div className='flex justify-center'>
               <div className="flex flex-col items-center justify-center gap-1.5 w-41.75 h-fit">
                  <span className="text-pbgreen font-light whitespace-nowrap bg-[#1A1A1A] w-fit h-fit text-center rounded-full px-6 py-2 border border-[#262626]">
                   {name}
                  </span>
                  {!linkedInUrl && !imageUrl &&(
                    <p className='text-[#B3B3B3] font-lexend font-light text-[17px] text-center leading-[1.4] w-34.75 h-6 '>
                     {role}
                    </p>
                  )}
                </div>
            </div>
        </div>
    );
};
export default Card;
     


