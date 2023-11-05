import { StyleSheet, Text, View } from "react-native";
import { buttonsInfo } from "../shared/buttonsSlice";
import { Button } from "react-native-elements";

const ButtonsScreen = ({ route, navigation }) => {
  const { selectedButton } = route.params;
  const { color } = route.params;
  return (
    <View style={styles.container}>
      {buttonsInfo[selectedButton].map((emotion) => {
        return (
          <Button
            key={emotion}
            title={emotion}
            titleStyle={{ color: "black", fontSize: 18 }}
            onPress={() => navigation.navigate("IntensityScreen")}
            style={{ marginBottom: 5, width: 200 }}
            buttonStyle={{ backgroundColor: color }}
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
    padding: 20,
  },
});

export default ButtonsScreen;
