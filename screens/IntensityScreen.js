import { StyleSheet, Text, View } from "react-native";
import { Button, Slider, Icon } from "react-native-elements";
import { useState } from "react";

const IntensityScreen = ({ navigation }) => {
  const [intensity, setIntensity] = useState(1);
  console.log("intensityscreen", intensity);
  return (
    <View style={styles.container}>
      <Text>Select the Intensity</Text>
      <Text>How intense is this feeling?</Text>
      <Slider
        allowTouchTrack
        style={styles.slider}
        value={intensity}
        onValueChange={setIntensity}
        maximumValue={10}
        minimumValue={1}
        step={1}
        trackStyle={{ height: 10, backgroundColor: "transparent" }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: "transparent" }}
        thumbProps={{
          children: (
            <Icon
              name="fire"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#f50"
            />
          ),
        }}
      />
      <Text>Intensity: {intensity}</Text>
      <Button
        title="Submit"
        onPress={() => navigation.navigate("Skills", { intensity })}
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
  slider: {
    width: 300,
  },
});

export default IntensityScreen;
