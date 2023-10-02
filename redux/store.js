import { configureStore } from "@reduxjs/toolkit";
import { xpReducer } from "./xpSlice";
import { favoritesReducer } from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    xp: xpReducer,
    favorites: favoritesReducer,
  },
});
