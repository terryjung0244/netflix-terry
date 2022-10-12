import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  popularMovieList: null,
  topRatedMovieList: null,
  upComingMovieList: null,
  error: null,
  loading: false,
};

export const getTmdbApi = createAsyncThunk("getMovieApi", async () => {
  try {
    let popularMovieEndpoint = `/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    let responsePopularMovie = await fetch(`https://api.themoviedb.org${popularMovieEndpoint}`);
    let popularMovieList = await responsePopularMovie.json();

    let topRatedMovieEndpoint = `/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    let responseTopRatedMovie = await fetch(`https://api.themoviedb.org${topRatedMovieEndpoint}`);
    let topRatedMovieList = await responseTopRatedMovie.json();

    let upComingMovieEndpoint = `/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    let responseUpComingMovie = await fetch(`https://api.themoviedb.org${upComingMovieEndpoint}`);
    let upComingMovieList = await responseUpComingMovie.json();

    return {
      popularMovieList,
      topRatedMovieList,
      upComingMovieList,
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
        state.popularMovieList = action.payload.popularMovieList;
        state.topRatedMovieList = action.payload.topRatedMovieList;
        state.upComingMovieList = action.payload.upComingMovieList;
      })
      .addCase(getTmdbApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { getTmdbApiRequestAction } = tmdbSlice.actions;

export default tmdbSlice.reducer;
