import React, { Suspense } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "components/Navbar";
import ClipLoader from "react-spinners/ClipLoader";

const Home = React.lazy(() => import("pages/Home"));
const Movies = React.lazy(() => import("pages/Movies"));
const MoviesDetail = React.lazy(() => import("pages/MoviesDetail"));

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Suspense
          fallback={
            <ClipLoader style={{ display: "flex", justifyContent: "center" }} color="black" size={150} aria-label="Loading Spinner" data-testid="loader" />
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MoviesDetail />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
