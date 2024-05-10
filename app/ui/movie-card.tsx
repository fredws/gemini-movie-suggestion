import React from 'react';
import { fetchPoster } from '@/app/lib/poster';

export interface MovieProps {
  title: string,
  original_title: string,
  year: number,
  image: string,
  genre: string[]
}

export async function MovieCard({ movie }: { movie: MovieProps }) {
  let poster = await fetchPoster(movie.original_title);

  return (
    <div className="flex flex-col items-center w-auto border border-gray-200 rounded shadow mx-3 mb-3 p-4">
      <img
        src={poster}
        className='object-cover w-auto rounded'
        width={220}
        height={325}
        alt="Movie poster"
      />
      <div className="flex flex-col justify-evenly text-center rounded pt-4 px-4 h-full w-full leading-normal" >
        <div className="flex flex-row justify-center">
          <h5 className="mb-2 text-2x3 font-bold tracking-tight text-gray-900">{movie.title}</h5>
        </div>
        <div className="flow items-center justify-center">
          {movie.genre.map((genre: string) => {
            return(
              <span key={genre} className="inline-flex text-center bg-gray-50 px-5 rounded-full py-[2px] mx-1 my-1 text-xs text-gray-600 ring-1 ring-inset ring-gray-500/10">
                {genre}
              </span>
            )
          })}
        </div>
        <div className="border-solid border-t-2 mt-2 pt-2 items-center justify-center">
          <p className="font-normal text-gray-700">{movie.year}</p>
        </div>
      </div>
    </div>
  )
}