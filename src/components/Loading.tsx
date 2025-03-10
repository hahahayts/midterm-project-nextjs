import React from "react";

const Loading = () => {
  return (
    <div className="w-full max-w-6xl">
      <div className="w-full bg-[#1F2933] h-8 mb-3 animate-pulse rounded"></div>
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex justify-between animate-pulse">
            <div className="bg-[#1F2933] h-8 w-1/2 rounded"></div>
            <div className="bg-[#1F2933] h-8 w-1/3 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
