import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { showCurrentXP } from "../redux/userSlice";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";

const AccountScreen = () => {
  // const user = useSelector((state) => state.user);
  // const docRef = doc(db, "users", user.uid);
  // const docSnap = getDoc(docRef);

  // if (docSnap) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // docSnap.data() will be undefined in this case
  //   console.log("No such document!");
  // }

  return (
    <View>
      <Text>My XP: {useSelector(showCurrentXP)}</Text>
    </View>
  );
};

export default AccountScreen;
