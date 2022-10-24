import React from "react";
import { Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MovieModel } from "service/type/model/movie";

export interface BannerProps {
  movie: MovieModel
}

const MovieCard = ({ movie }: BannerProps ) => {
  const dispatch = useDispatch();
  const { loading, popularMovieList, topRatedMovieList, upComingMovieList, genreApi } = useSelector((state: any) => state.tmdbSlice);

  return (
    <div
      className="card-img"
      style={{
        backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${movie.poster_path}` + ")",
      }}
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        <div>
          {movie.genre_ids.map((id: number, index: number) => (
            <div key={index}>
              <Badge bg="danger">{genreApi.find((item: any) => item.id === id).name}</Badge>
            </div>
          ))}
        </div>
        <div>
          <span>{movie.vote_average} out 10 </span>
          <span></span>
          <span>{movie.adult ? "123" : "under 18"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
