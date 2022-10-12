import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTmdbApi } from "../movieSlice/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, popularMovieList } = useSelector((state) => state.tmdbSlice);

  console.log(popularMovieList);

  useEffect(() => {
    dispatch(getTmdbApi());
  }, []);

  const printRate = (popularMovieVoteAverage) => {
    if (popularMovieVoteAverage >= 7) {
      return <div>Helllllo</div>;
    }
  };

  return (
    <div>
      Popular
      <div>
        <h2>
          {popularMovieList &&
            popularMovieList.results.map((popularMovie) => {
              return (
                <div key={popularMovie.id}>
                  <h2>{popularMovie.title}</h2>
                  <h4>{popularMovie.overview}</h4>
                  <div>{printRate(popularMovie.vote_average)}</div>
                </div>
              );
            })}
        </h2>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
