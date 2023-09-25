import { StyleSheet, Text, View } from "react-native";
import IntensitySlider from "../components/IntensitySlider";

const IntensityScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Select the Intensity</Text>
      <Text>How intense is this feeling?</Text>
      <IntensitySlider />
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

export default IntensityScreen;
