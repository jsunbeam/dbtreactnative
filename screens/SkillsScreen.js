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
import { HeaderHeightContext } from "@react-navigation/stack";

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
    <HeaderHeightContext.Consumer>
      {(headerHeight) => (
        <View style={styles.container}>
          <View style={[styles.cardContainer, { marginTop: headerHeight }]}>
            <FlipCard
              front={
                <SkillCardFront
                  intensity={intensity}
                  skill={currentSkill}
                  isFavorite={favorites.includes(currentSkill.id)}
                  markFavorite={() => dispatch(toggleFavorite(currentSkill.id))}
                />
              }
              back={
                <SkillCardBack intensity={intensity} skill={currentSkill} />
              }
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Next Skill"
              buttonStyle={{
                backgroundColor: "#8CC0DE",
                height: 70,
                margin: 10,
              }}
              containerStyle={{ marginBottom: 0, width: 130 }}
              titleStyle={{ color: "black", fontSize: 22 }}
              onPress={handleNextSkill}
            ></Button>
            <Button
              title="I practiced this skill!"
              buttonStyle={{
                backgroundColor: "#8CC0DE",
                height: 70,
                margin: 10,
              }}
              containerStyle={{ marginBottom: 0, width: 220 }}
              titleStyle={{ color: "black", fontSize: 22 }}
              onPress={() => handleAddXP(100)}
            ></Button>
          </View>
        </View>
      )}
    </HeaderHeightContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  cardContainer: {
    flex: 0.5,
  },
  buttonContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default SkillsScreen;
