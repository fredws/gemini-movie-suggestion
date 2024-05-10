import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const generationConfig = {
  temperature: 0.1,
  topP: 1,
  topK: 15,
};

const model = genAI.getGenerativeModel({
  model: "gemini-1.0-pro-latest",
  generationConfig
});

export async function fetchSuggestions(movie: string) {
  if (movie != undefined && movie.length > 3) {
    const movie_obj = {
      movies: [
        {
          title: "Movie title",
          original_title: "Movie original title",
          year: "Movie year",
          genre: ["Movie genre 1", "Movie genre 2"]
        }
      ]
    }
    const prompt = `Liste filmes similares a '${movie}'. Inclua o título, título original, ano e gênero do filme. Gere o resultado no formato JSON estruturado seguindo o seguinte modelo: ${JSON.stringify(movie_obj)}`

    const result = await model.generateContent(prompt);
    const response = result.response;
    return response.text().replace(/\n|\r|\t/g, '').replace(/```json|```/g, '');
  } else {
    return '{"movies":[]}';
  }
}
