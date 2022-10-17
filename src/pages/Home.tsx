import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "service/hook/useAppDispatch";
import useAppSelector from "service/hook/useAppSelector";
import { getTmdbApi } from "../movieSlice/movieSlice";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";

const Home = () => {
  const dispatch = useAppDispatch();
  const { loading, popularMovieList, topRatedMovieList, upComingMovieList, genreApi } = useAppSelector((state) => state.tmdbSlice);

  useEffect(() => {
    dispatch(getTmdbApi());
  }, []);

  // const printRate = (popularMovieVoteAverage) => {
  //   if (popularMovieVoteAverage >= 7) {
  //     return <div>Helllllo</div>;
  //   }
  // };

  console.log("genreApi", genreApi);
  return (
    <div className="homeMainContainer">
      <div>{popularMovieList && <Banner movie={popularMovieList} />}</div>
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
        <h2 className="homeH2Container">Popular Movies</h2>
        <MovieSlide movies={popularMovieList} />
        <h2 className="homeH2Container">Toprated Movies</h2>
        <MovieSlide movies={topRatedMovieList} />
        <h2 className="homeH2Container">Upcoming Movies</h2>
        <MovieSlide movies={upComingMovieList} />
      </div>
    </div>
  );
};

export default Home;

//<div>{popularMovieList && <Banner movie={popularMovieList.results} />}</div>은 되고,
