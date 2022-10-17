import { MovieModel } from "../model/movie";

export interface MovieResponse {
  page: number;
  total_page: number;
  total_results: number;
  results: MovieModel[];
}
