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
