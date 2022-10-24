import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieModel } from "service/type/model/movie";
import MovieCard from "./MovieCard";

interface MovieSlideProps {
  movies: MovieModel[]
}

const MovieSlide = ({ movies }: MovieSlideProps) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  console.log(movies);

  return (
    <div>
      {movies ? (
        <div>
          <Carousel responsive={responsive}>
            {movies.map((movie: MovieModel) => (
              <div key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </Carousel>
        </div>
      ) : (
        <div> Loading...</div>
      )}
    </div>
  );
};

export default MovieSlide;
