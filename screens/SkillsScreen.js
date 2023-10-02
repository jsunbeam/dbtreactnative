import { SkillCardBack, SkillCardFront } from "../components/SkillCard";
import { cardsArray } from "../shared/cardsSlice";
import { StyleSheet, View } from "react-native";
import FlipCard from "../components/FlipCard";
import { Button, Card } from "react-native-elements";
import { Text } from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addXP } from "../redux/xpSlice";
import { toggleFavorite } from "../redux/favoritesSlice";

const SkillsScreen = ({ route, navigation }) => {
  const { intensity } = route.params;
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

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

  const handleAddXP = (xp) => {
    dispatch(addXP(xp));
    console.log("xp to add", xp);
  };

  console.log("skillsscreen intensity", intensity);
  return (
    <View style={styles.container}>
      <FlipCard
        front={
          <SkillCardFront
            intensity={intensity}
            skill={currentSkill}
            isFavorite={favorites.includes(currentSkill.id)}
            markFavorite={() => dispatch(toggleFavorite(currentSkill.id))}
          />
        }
        back={<SkillCardBack intensity={intensity} skill={currentSkill} />}
      />
      <Button
        title="Next Skill"
        buttonStyle={{ backgroundColor: "#8CC0DE", height: 70 }}
        containerStyle={{ marginBottom: 10, width: 200 }}
        titleStyle={{ color: "black", fontSize: 22 }}
        onPress={handleNextSkill}
      ></Button>
      <Button
        title="I practiced this skill!"
        buttonStyle={{ backgroundColor: "#8CC0DE", height: 70 }}
        containerStyle={{ marginBottom: 10, width: 200 }}
        titleStyle={{ color: "black", fontSize: 22 }}
        onPress={() => handleAddXP(100)}
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
