import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { showCurrentXP } from "../redux/xpSlice";

const AccountScreen = () => {
  return (
    <View>
      <Text>My XP: {useSelector(showCurrentXP)}</Text>
    </View>
  );
};

export default AccountScreen;
