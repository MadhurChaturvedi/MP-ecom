import React from "react";

function Simmer() {
  return (
    <div className="group relative border p-3">
      <div className="aspect-square w-full rounded-md bg-[length:200%_100%] bg-shimmer animate-shimmer lg:aspect-auto lg:h-80" />

      <div className="mt-4 flex justify-between flex-col">
        <div>
          <div className="h-4 rounded w-3/4 mb-2 bg-[length:200%_100%] bg-shimmer animate-shimmer" />
          <div className="h-3 rounded w-1/2 bg-[length:200%_100%] bg-shimmer animate-shimmer" />
        </div>
        <div className="flex flex-col mt-3 space-y-2">
          <div className="h-4 rounded w-1/3 bg-[length:200%_100%] bg-shimmer animate-shimmer" />
          <div className="h-3 rounded w-2/3 bg-[length:200%_100%] bg-shimmer animate-shimmer" />
        </div>
      </div>
    </div>
  );
}

export default Simmer;
