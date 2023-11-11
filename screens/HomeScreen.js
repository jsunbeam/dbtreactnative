import { View, Image, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/panda-avatar.png")}
        style={styles.image}
      />
      <Text style={styles.header}>DBT Panda</Text>
      <Text style={styles.text}>
        Don't know which DBT skills to use? I can help! Choose what you're
        feeling below to get started.
      </Text>
      <Button
        title="Emotions"
        buttonStyle={{ backgroundColor: "#8CC0DE", height: 70 }}
        containerStyle={{ marginBottom: 10, width: 200 }}
        titleStyle={{ color: "black", fontSize: 22 }}
        onPress={() =>
          navigation.navigate("ButtonsScreen", {
            selectedButton: "emotions",
            color: "#8CC0DE",
          })
        }
      />
      <Button
        title="Urges"
        buttonStyle={{ backgroundColor: "#CCEEBC", height: 70 }}
        containerStyle={{ marginBottom: 10, width: 200 }}
        titleStyle={{ color: "black", fontSize: 22 }}
        onPress={() =>
          navigation.navigate("ButtonsScreen", {
            selectedButton: "urges",
            color: "#CCEEBC",
          })
        }
      />
      <Button
        title="SOS"
        buttonStyle={{ backgroundColor: "#f77474", height: 70 }}
        containerStyle={{ width: 200 }}
        titleStyle={{ color: "black", fontSize: 22 }}
        onPress={() => navigation.navigate("Skills", { intensity: 10 })}
      />
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
  header: {
    // fontFamily: "Montserrat",
    fontSize: 26,
    fontWeight: "bold",
    margin: 10,
  },
  image: {
    margin: 0,
    padding: 50,
    height: 200,
    width: 200,
  },
  text: {
    // fontFamily: "Montserrat",
    fontSize: 16,
    marginBottom: 20,
  },
});

export default HomeScreen;
