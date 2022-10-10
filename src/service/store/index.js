import { configureStore } from "@reduxjs/toolkit";

export const createStore = () =>
  configureStore({
    reducer: {},
  });

export const store = createStore();
