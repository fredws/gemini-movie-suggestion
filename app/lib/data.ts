import { fetchSuggestions } from '@/app/lib/gemini';

export async function fetchMovies(query: string) {
  try {
    const movies = await fetchSuggestions(query).then((data) => {
      return JSON.parse(data).movies
    })

    return Promise.all(movies);
  } catch (error) {
    return {};
  }
}
