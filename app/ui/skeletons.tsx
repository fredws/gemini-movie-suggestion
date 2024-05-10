import React from 'react';

export default function MoviesSkeleton() {
  return (
    <div className="grid rounded-lg xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
      <MovieSkeleton />
      <MovieSkeleton />
      <MovieSkeleton />
      <MovieSkeleton />
      <MovieSkeleton />
      <MovieSkeleton />
    </div>
  );
}

export function MovieSkeleton() {
  return (
    <div className="animate-pulse w-auto flex flex-col mx-3">
      <div className="object-cover w-auto rounded bg-slate-200 h-[340px]"></div>
      <div className="flex-1 py-1">
        <div className="h-2 bg-slate-200 py-4 w-100 rounded-full my-3"></div>
        <div className="my-3">
          <div className="grid grid-cols-3 gap-2 my-3">
            <div className="h-2 bg-slate-200 rounded-full py-[8px] col-span-1"></div>
            <div className="h-2 bg-slate-200 rounded-full py-[8px] col-span-1"></div>
            <div className="h-2 bg-slate-200 rounded-full py-[8px] col-span-1"></div>
          </div>
          <div className="h-2 mx-auto bg-slate-200 py-3 w-1/2 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
