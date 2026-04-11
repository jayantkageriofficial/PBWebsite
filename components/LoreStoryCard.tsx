import React from "react";
import LoreStoryComp from "./LoreStoryComp";

function LoreStoryCard({ stories }: { stories: string[] }) {
  return (
    <div className="h-fit w-full mb-10 bg-pbpages flex justify-center">
      <div className="w-280 pt-7 pb-7 items-center flex flex-col bg-[#1C1C1C]">
        {stories.map((story, idx) => {
          return <LoreStoryComp key={idx} story={story} />;
        })}
      </div>
    </div>
  );
}

export default LoreStoryCard;
