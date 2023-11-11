import { addXP } from "./userSlice";
import { db } from "../firebase.config"; // import your firestore instance

const updateUserInFirestore = (store) => (next) => async (action) => {
  if (action.type === addXP.type) {
    const state = store.getState();
    const user = state.user.user;
    const currentXP = state.user.currentXP;

    // Assuming you have a 'users' collection in Firestore
    // and 'user' contains a unique 'id' property
    if (user && user.id) {
      await db.collection("users").doc(user.id).set(
        {
          user,
          currentXP,
        },
        { merge: true }
      );
    }
  }
  let result = next(action);
  return result;
};

export default updateUserInFirestore;
