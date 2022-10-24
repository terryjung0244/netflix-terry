import React from "react";
import { MovieModel } from "service/type/model/movie";
// import { BannerProps } from "./Banner.interface";

interface BannerProps {
  movies: MovieModel[]
}

const Banner = ({ movies }: BannerProps) => {

  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movies[0].poster_path}` + ")",
        }}
      >
        <div className="banner-info">
          <h1>{movies[0].title}</h1>
          <p>{movies[0].overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;