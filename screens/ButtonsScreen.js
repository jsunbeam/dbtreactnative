import { StyleSheet, Text, View } from "react-native";
import { buttonsInfo } from "../shared/buttonsSlice";
import { Button } from "react-native-elements";

const ButtonsScreen = ({ route, navigation }) => {
  const { selectedButton } = route.params;
  return (
    <View style={styles.container}>
      {buttonsInfo[selectedButton].map((emotion) => {
        return (
          <Button
            key={emotion}
            title={emotion}
            onPress={() => navigation.navigate("IntensityScreen")}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAF0D7",
  },
});

export default ButtonsScreen;
