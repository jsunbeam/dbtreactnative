import { SkillCardBack, SkillCardFront } from "../components/SkillCard";
import { cardsArray } from "../shared/cardsSlice";
import { StyleSheet, View } from "react-native";
import FlipCard from "../components/FlipCard";
import { Card } from "react-native-elements";
import { Text } from "react-native";

const SkillsScreen = ({ route, navigation }) => {
  const { intensity } = route.params;
  const getRandomSkill = (intensity) => {
    const intensityArray = cardsArray.filter(
      (skill) => skill.intensity >= intensity
    );
    // console.log("intensityarray", intensityArray);
    return intensityArray[Math.floor(Math.random() * intensityArray.length)];
  };
  const randomSkill = getRandomSkill(intensity);

  console.log("skillsscreen intensity", intensity);
  return (
    <View style={styles.container}>
      <FlipCard
        front={
          <Card>
            <SkillCardFront intensity={intensity} skill={randomSkill} />
          </Card>
        }
        back={
          <Card>
            <SkillCardBack intensity={intensity} skill={randomSkill} />
          </Card>
        }
      />
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
