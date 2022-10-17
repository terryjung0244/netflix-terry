import { MovieResponse } from "../response/movie";

export interface MovieModel {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[]; //Type of number inside of array.
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_data: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface genreModel {
  id: number;
  name: string;
}

export const parseMovieResponseToMovieModel = (popularMovieResponse: MovieResponse) => {
  const parsedData: MovieModel[] = popularMovieResponse.results.map((movie: MovieModel) => {
    return {
      adult: movie.adult,
      backdrop_path: movie.backdrop_path,
      genre_ids: movie.genre_ids, //Type of number inside of array.
      id: movie.id,
      original_language: movie.original_language,
      original_title: movie.original_title,
      overview: movie.overview,
      popularity: movie.popularity,
      poster_path: movie.poster_path,
      release_data: movie.release_data,
      title: movie.title,
      video: movie.video,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
    };
  });
};
