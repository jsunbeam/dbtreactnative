import { useState } from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import { Slider, Icon } from "react-native-elements";

const IntensitySlider = () => {
  const [value, setValue] = useState(1);

  return (
    <View style={{ flex: 1, alignItems: "stretch", justifyContent: "center" }}>
      <Slider
        allowTouchTrack
        style={styles.slider}
        value={value}
        onValueChange={setValue}
        maximumValue={10}
        minimumValue={1}
        step={1}
        trackStyle={{ height: 10, backgroundColor: "transparent" }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: "transparent" }}
        thumbProps={{
          children: (
            <Icon
              name="heartbeat"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#f50"
            />
          ),
        }}
      />
      <Text>Intensity: {value}</Text>
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
