import { createSlice } from "@reduxjs/toolkit";
import updateUserInFirestore from "./middleware";

const userSlice = createSlice({
  name: "user",
  initialState: { uid: null, currentXP: 0 },
  reducers: {
    setUid: (state, action) => {
      state.uid = action.payload;
    },
    clearUser: (state) => {
      state.uid = null;
    },
    addXP: (state, action) => {
      state.currentXP += action.payload;
    },
  },
});

export const { setUid, clearUser, addXP } = userSlice.actions;

export const userReducer = userSlice.reducer;

export const showCurrentXP = (state) => state.user.currentXP;
