import { SkillCardBack, SkillCardFront } from "../components/SkillCard";
import { cardsArray } from "../shared/cardsSlice";
import { StyleSheet, View } from "react-native";
import FlipCard from "../components/FlipCard";
import { Button, Card } from "react-native-elements";
import { Text } from "react-native";
import { useState } from "react";

const SkillsScreen = ({ route, navigation }) => {
  const { intensity } = route.params;
  const getRandomSkill = (intensity) => {
    const intensityArray = cardsArray.filter(
      (skill) => skill.intensity >= intensity
    );
    // console.log("intensityarray", intensityArray);
    return intensityArray[Math.floor(Math.random() * intensityArray.length)];
  };

  const [currentSkill, setCurrentSkill] = useState(getRandomSkill(intensity));

  const handleNextSkill = () => {
    const newRandomSkill = getRandomSkill(intensity);
    setCurrentSkill(newRandomSkill);
  };

  console.log("skillsscreen intensity", intensity);
  return (
    <View style={styles.container}>
      <FlipCard
        front={<SkillCardFront intensity={intensity} skill={currentSkill} />}
        back={<SkillCardBack intensity={intensity} skill={currentSkill} />}
      />
      <Button
        title="Next Skill"
        buttonStyle={{ backgroundColor: "#8CC0DE", height: 70 }}
        containerStyle={{ marginBottom: 10, width: 200 }}
        titleStyle={{ color: "black", fontSize: 22 }}
        onPress={handleNextSkill}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});

export default SkillsScreen;
