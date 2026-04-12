import React from "react";

function LoreStoryComp({ story }: { story: string }) {
  return (
    <div className="flex w-full mb-5 h-fit pl-5 pr-4 md:pl-12.5 md:pr-10">
      <div className="w-10 flex pt-1.5 justify-center mr-3">
        <div className="rounded-4xl h-3.5 w-3.5 bg-pbgreen"></div>
      </div>

      <div className="text-pbtext h-fit font-medium">{story}</div>
    </div>
  );
}

export default LoreStoryComp;
