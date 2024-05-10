import { Suspense } from 'react';
import { MoviesSkeleton } from '@/app/ui/skeletons';
import Search from '@/app/ui/search';
import Movies from '@/app/ui/movies';

export default function Home({ searchParams }: { searchParams : { query: string } }) {
  const query = searchParams?.query || '';

  return (
    <main className="flex w-screen">
      {/* Header and Search bar */}
      <div className="bg-gray-900 h-screen w-2/5 px-4 inline-flex place-content-center">
        <div className="m-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 text-white">
              Encontre filmes e séries
            </h1>
            <div className="mt-6">
              <small className="mt-6 text-md leading-8 text-gray-300">
                Gostou muito de um filme e gostaria de assistir outros parecidos?<br/>
                Procure um filme abaixo e nós recomendamos outros similares pra você.
              </small>
            </div>
            <div className="mt-6 mx-6 flex items-center justify-center">
              <Search placeholder="Harry Potter e a Pedra Filosofal" />
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="bg-white h-screen w-3/5 inline-flex content-center overflow-y-auto overflow-x-none">
        <div className="m-5 w-full">
          <div className="text-center h-full">
            <Suspense key={query} fallback={<MoviesSkeleton />}>
              <Movies query={query} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}

