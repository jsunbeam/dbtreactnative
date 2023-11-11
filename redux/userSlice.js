import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, currentXP: 0 },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    addXP: (state, action) => {
      state.currentXP += action.payload;
      console.log("state.currentxp", state.currentXP);
    },
  },
});

export const { setUser, clearUser, addXP } = userSlice.actions;

export const userReducer = userSlice.reducer;

export const showCurrentXP = (state) => state.user.currentXP;
