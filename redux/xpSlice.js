// import { createSlice } from "@reduxjs/toolkit";
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../firebase.config";

// // export const updateUserXP = createAsyncThunk(
// //   'xp/updateXP',
// //   async (xp, { getState }) => {
// //     const { user } = getState();
// //     if (user) {
// //       await setDoc(doc(db, "users", user.uid), { xp });
// //     }
// //     return xp;
// //   }
// // );

// const initialState = {
//   currentXP: 0,
// };

// const xpSlice = createSlice({
//   name: "xp",
//   initialState,
//   reducers: {
//     addXP: (state, action) => {
//       state.currentXP += action.payload;
//       console.log("state.currentxp", state.currentXP);
//     },
//   },
// });

// export const xpReducer = xpSlice.reducer;
// export const { addXP } = xpSlice.actions;
// export const showCurrentXP = (state) => state.xp.currentXP;
