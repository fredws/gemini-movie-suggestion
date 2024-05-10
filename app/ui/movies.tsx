import React from 'react';
import { fetchMovies } from '@/app/lib/data';
import { MovieCard, MovieProps } from '@/app/ui/movie-card';

export default async function Movies({ query }: { query: string }) {
  const movies: MovieProps[] = await fetchMovies(query);

  return (
    <div className="grid rounded-lg xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
      {movies.map(async (movie: MovieProps) => {
        return(<MovieCard key={movie.title} movie = {movie} />)
      })}
    </div>
  );
}
