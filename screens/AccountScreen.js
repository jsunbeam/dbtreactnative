import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { showCurrentXP } from "../redux/userSlice";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";

const AccountScreen = () => {
  return (
    <View>
      <Text style={styles.text}>My XP: {useSelector(showCurrentXP)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    fontWeight: "bold",
    margin: 10,
  },
});

export default AccountScreen;
