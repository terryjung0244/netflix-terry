import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  error: null,
  loading: false,
};

export const getTmdbApi = createAsyncThunk("getMovieApi", async () => {
  try {
    let popularEndpoint = `/3/movie/popular?api_key=${}&language=en-US&page=1`;
    let response = await fetch(`https://api.themoviedb.org${popularEndpoint}`);
    let data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }

  Promise.all();
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
        state.data = action.payload;
      })
      .addCase(getTmdbApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { getTmdbApiRequestAction } = tmdbSlice.actions;

export default tmdbSlice.reducer;
