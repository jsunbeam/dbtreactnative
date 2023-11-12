import { SkillCardBack, SkillCardFront } from "../components/SkillCard";
import { cardsArray } from "../shared/cardsSlice";
import { StyleSheet, View } from "react-native";
import FlipCard from "../components/FlipCard";
import { Button, Card } from "react-native-elements";
import { Text } from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addXP } from "../redux/userSlice";
import { toggleFavorite } from "../redux/favoritesSlice";

const SingleSkillScreen = ({ route, navigation }) => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const { skill } = route.params;

  const handleAddXP = (xp) => {
    dispatch(addXP(xp));
    console.log("xp to add", xp);
  };

  return (
    <View style={styles.container}>
      <FlipCard
        front={
          <SkillCardFront
            intensity={skill.intensity}
            skill={skill}
            isFavorite={favorites.includes(skill.id)}
            markFavorite={() => dispatch(toggleFavorite(skill.id))}
          />
        }
        back={<SkillCardBack intensity={skill.intensity} skill={skill} />}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="I practiced this skill!"
          buttonStyle={{ backgroundColor: "#8CC0DE", height: 70, margin: 10 }}
          containerStyle={{ marginBottom: 10, width: 220 }}
          titleStyle={{ color: "black", fontSize: 22 }}
          onPress={() => handleAddXP(100)}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 100,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default SingleSkillScreen;
