import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import tmdbSlice from "movieSlice/movieSlice";

export const createStore = () =>
  configureStore({
    reducer: {
      tmdbSlice,
    },
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
