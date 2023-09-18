import { View, Text } from "react-native";
import HomeScreen from "./HomeScreen";

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 50,
      }}
    >
      <Text>Testing random text</Text>
      <HomeScreen />
    </View>
  );
};

export default Main;
