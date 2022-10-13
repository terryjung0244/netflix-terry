import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTmdbApi } from "../movieSlice/movieSlice";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, popularMovieList, topRatedMovieList, upComingMovieList } = useSelector((state) => state.tmdbSlice);

  useEffect(() => {
    dispatch(getTmdbApi());
  }, []);

  // const printRate = (popularMovieVoteAverage) => {
  //   if (popularMovieVoteAverage >= 7) {
  //     return <div>Helllllo</div>;
  //   }
  // };
  return (
    <div>
      <div>{popularMovieList && <Banner movie={popularMovieList.results} />}</div>
      <div>
        <h2>
          {/* {popularMovieList &&
            popularMovieList.results.map((popularMovie) => {
              return (
                <div key={popularMovie.id}>
                  <h2>{popularMovie.title}</h2>
                  <h4>{popularMovie.overview}</h4>
                </div>
              );
            })} */}
        </h2>
        <h2>Popular Movies</h2>
        <MovieSlide movies={popularMovieList} />
        <h2>Toprated Movies</h2>
        <MovieSlide movies={topRatedMovieList} />
        <h2>Upcoming Movies</h2>
        <MovieSlide movies={upComingMovieList} />
      </div>
    </div>
  );
};

export default Home;

//<div>{popularMovieList && <Banner movie={popularMovieList.results} />}</div>은 되고,
