import React from "react";
import { Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const MovieCard = ({ movieList }) => {
  const dispatch = useDispatch();
  const { loading, popularMovieList, topRatedMovieList, upComingMovieList, genreApi } = useSelector((state) => state.tmdbSlice);

  console.log(movieList);
  return (
    <div
      className="card-img"
      style={{
        backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${movieList.poster_path}` + ")",
      }}
    >
      <div className="overlay">
        <h1>{movieList.title}</h1>
        <div>
          {movieList.genre_ids.map((id, index) => (
            <div key={index}>
              <Badge bg="danger">{genreApi.find((item) => item.id === id).name}</Badge>
            </div>
          ))}
        </div>
        <div>
          <span>{movieList.vote_average} out 10 </span>
          <span></span>
          <span>{movieList.adult ? "123" : "under 18"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
