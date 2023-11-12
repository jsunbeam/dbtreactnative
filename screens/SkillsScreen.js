import { SkillCardBack, SkillCardFront } from "../components/SkillCard";
import { cardsArray } from "../shared/cardsSlice";
import { StyleSheet, View } from "react-native";
import FlipCard from "../components/FlipCard";
import { Button, Card } from "react-native-elements";
import { Text } from "react-native";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addXP } from "../redux/userSlice";
import { toggleFavorite } from "../redux/favoritesSlice";
import { useHeaderHeight } from "@react-navigation/stack";
import updateUserInFirestore from "../redux/middleware";
import { db } from "../firebase.config"; // import your firestore instance
import { doc, updateDoc } from "firebase/firestore";

const SkillsScreen = ({ route, navigation }) => {
  const { intensity } = route.params;
  const favorites = useSelector((state) => state.favorites);
  const currentXP = useSelector((state) => state.user.currentXP);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const headerHeight = useHeaderHeight();

  const userEffect = useEffect(() => {
    console.log("useEffect");
    console.log("user", user);
    if (user) {
      const userDoc = doc(db, "users", user.uid);
      console.log("userDoc", userDoc);
      updateDoc(userDoc, { xp: user.currentXP });
    }
  }, [user.currentXP]);

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
    console.log("xp to add", xp);
    dispatch(addXP(xp));
  };

  console.log("skillsscreen intensity", intensity);
  return (
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
          back={<SkillCardBack intensity={intensity} skill={currentSkill} />}
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
          onPress={() => handleAddXP(3)}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    marginTop: 100,
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
