import React from "react";

const Banner = ({ movie }) => {
  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie[0].poster_path}` + ")",
        }}
      >
        <div className="banner-info">
          <h1>{movie[0].title}</h1>
          <p>{movie[0].overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
