import { addXP } from "./userSlice";
import { db } from "../firebase.config"; // import your firestore instance
import { doc, updateDoc } from "firebase/firestore";

const updateUserInFirestore = (store) => (next) => async (action) => {
  console.log("Middleware triggered:", action.type); // Log the action type

  if (action.type === addXP.type) {
    const state = store.getState();
    const user = state.user.user;
    const currentXP = state.user.currentXP;

    if (user && user.uid) {
      console.log(
        "Updating Firestore with user:",
        user,
        "and currentXP:",
        currentXP
      );
      const userDoc = doc(db, "users", user.uid);
      await updateDoc(userDoc, { xp: currentXP });
      //   .then(
      //     (result) => {
      //       console.log("result", result);
      //     },
      //     (err) => {
      //       console.log("err", err);
      //     }
      //   );
      console.log("Firestore update successful"); // Log on successful update
    }
  }

  let result = next(action);
  return result;
};

export default updateUserInFirestore;
