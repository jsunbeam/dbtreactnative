import { View, Image, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  image: {
    margin: 0,
    padding: 50,
    height: 200,
    width: 200,
  },
  button: {},
});
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/panda-avatar.png")}
        style={styles.image}
      />
      <Text>DBT Panda</Text>
      <Text>
        Don't know which DBT skills to use? I can help! Choose what you're
        feeling below to get started.
      </Text>
      <Button color="secondary" title="Emotions" style={styles.button} />
      <Button title="Urges" style={styles.button} />
      <Button title="SOS" style={styles.button} />
    </View>
  );
};

export default HomeScreen;
