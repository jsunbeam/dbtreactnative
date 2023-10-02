import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentXP: 0,
};

const xpSlice = createSlice({
  name: "xp",
  initialState,
  reducers: {
    addXP: (state, action) => {
      state.currentXP += action.payload;
      console.log("state.currentxp", state.currentXP);
    },
  },
});

export const xpReducer = xpSlice.reducer;
export const { addXP } = xpSlice.actions;
export const showCurrentXP = (state) => state.xp.currentXP;
