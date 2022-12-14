import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { genreModel, MovieModel, parseMovieResponseToMovieModel } from "service/type/model/movie";
import { MovieResponse } from "service/type/response/movie";

type InitialStateType = {
  popularMovieList: MovieModel[] | null;
  topRatedMovieList: MovieModel[] | null;
  upComingMovieList: MovieModel[] | null;
  genreApi: genreModel[] | null;
  error: Error | null | string;
  loading: boolean;
};

const initialState: InitialStateType = {
  popularMovieList: null,
  topRatedMovieList: null,
  upComingMovieList: null,
  genreApi: null,
  error: null,
  loading: false,
};

export const getTmdbApi = createAsyncThunk("getMovieApi", async () => {
  try {
    let popularMovieEndpoint = `/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    let responsePopularMovie = await fetch(`https://api.themoviedb.org${popularMovieEndpoint}`);
    let popularMovieList: MovieResponse = await responsePopularMovie.json();

    const parsedPopularMovieResponseToMovieModel: MovieModel[] = parseMovieResponseToMovieModel(popularMovieList)

    let topRatedMovieEndpoint = `/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    let responseTopRatedMovie = await fetch(`https://api.themoviedb.org${topRatedMovieEndpoint}`);
    let topRatedMovieList: MovieResponse = await responseTopRatedMovie.json();

    const parsedTopratedMovieResponseToMovieModel: MovieModel[] = parseMovieResponseToMovieModel(topRatedMovieList)

    let upComingMovieEndpoint = `/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    let responseUpComingMovie = await fetch(`https://api.themoviedb.org${upComingMovieEndpoint}`);
    let upComingMovieList = await responseUpComingMovie.json();

    let genreApiEndpoint = `/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    let responseGenreApi = await fetch(`https://api.themoviedb.org${genreApiEndpoint}`);
    let genreApi = await responseGenreApi.json();

    return {
      parsedPopularMovieResponseToMovieModel,
      parsedTopratedMovieResponseToMovieModel,
      upComingMovieList,
      genreApi,
    };
  } catch (err) {
    throw err;
  }
});

const tmdbSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    getTmdbApiRequestAction: (state, action) => {
      console.log(action);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTmdbApi.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTmdbApi.fulfilled, (state, action) => {
        state.loading = false;
        state.popularMovieList = action.payload.parsedPopularMovieResponseToMovieModel;
        state.topRatedMovieList = action.payload.parsedTopratedMovieResponseToMovieModel;
        state.upComingMovieList = action.payload.upComingMovieList;
        state.genreApi = action.payload.genreApi.genres;
      })
      .addCase(getTmdbApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error as string; //???????????? ?????? ????????? ??? ??????.
      });
  },
});

export const { getTmdbApiRequestAction } = tmdbSlice.actions;

export default tmdbSlice.reducer;
