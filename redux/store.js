import { configureStore } from "@reduxjs/toolkit";
import { xpReducer } from "./xpSlice";
import { favoritesReducer } from "./favoritesSlice";
import { userReducer } from "./userSlice";
import updateUserInFirestore from "./middleware";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(updateUserInFirestore),
});
