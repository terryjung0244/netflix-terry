import { configureStore } from "@reduxjs/toolkit";
import tmdbSlice from "./../../movieSlice/movieSlice";

export const createStore = () =>
  configureStore({
    reducer: {
      tmdbSlice,
    },
  });

export const store = createStore();
