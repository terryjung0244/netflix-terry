import React from "react";
import logo from "./../assets/netflixLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img style={{ width: "80px" }} src={logo} />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/" style={{ color: "white" }} class="nav-link active" aria-current="page" href="#">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/movies" style={{ color: "white" }} class="nav-link" href="#">
                    Movies
                  </Link>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-danger" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
