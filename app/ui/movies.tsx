import React from 'react';
import Image from 'next/image';
import { fetchMovies } from '@/app/lib/data';
import { MoviesListProps } from "@/types/movie-list";
import { MovieProps } from "@/types/movie";
import { MovieCard } from '@/app/ui/movie-card';

export default async function Movies({ query }: { query: string }) {
  const movies: MoviesListProps = await fetchMovies(query);

  return (
    <div className="grid rounded-lg xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
      {movies.map(async (movie: MovieProps) => {
        return(<MovieCard movie = {movie} />)
      })}
    </div>
  );
}