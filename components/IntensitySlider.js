import { useState } from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Slider, Icon } from "react-native-elements";

const IntensitySlider = () => {
  const [intensity, setIntensity] = useState(1);
  // console.log("intensity", intensity);
  return (
    <View style={{ flex: 1, alignItems: "stretch", justifyContent: "center" }}>
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
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  slider: {
    width: 300,
  },
});

export default IntensitySlider;
