import { View, Image, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    margin: 0,
    padding: 0,
    height: 20,
    width: 200,
  },
});
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/panda-avatar.png")}
        style={styles.image}
      />
      <Button color="secondary" title="Emotions" />
      <Button title="Urges" />
      <Button title="SOS" />
    </View>
  );
};

export default HomeScreen;
