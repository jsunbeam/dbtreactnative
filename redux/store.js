import { configureStore } from "@reduxjs/toolkit";
import { xpReducer } from "./xpSlice";

export const store = configureStore({
  reducer: {
    xp: xpReducer,
  },
});
