import React from "react";

function LoreStoryComp({ story }: { story: string }) {
  return (
    <div className="flex min-w-220 mb-5 h-fit max-w-220">
      <div className="w-10 flex pt-1.5 justify-center mr-3">
        <div className="rounded-4xl h-3.5 w-3.5 bg-pbgreen"></div>
      </div>

      <div className="text-pbtext h-fit font-medium">{story}</div>
    </div>
  );
}

export default LoreStoryComp;
