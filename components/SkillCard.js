import { Button, Card, Text } from "react-native-elements";
import { cardsArray } from "../shared/cardsSlice";
import { useState } from "react";
import { StyleSheet } from "react-native";

export const SkillCardFront = ({ intensity }) => {
  console.log("SkillCard", intensity);

  const getRandomSkill = (intensity) => {
    const intensityArray = cardsArray.filter(
      (skill) => skill.intensity >= intensity
    );
    // console.log("intensityarray", intensityArray);
    return intensityArray[Math.floor(Math.random() * intensityArray.length)];
  };

  const [currentSkill, setCurrentSkill] = useState(getRandomSkill(intensity));
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextSkill = () => {
    const newRandomSkill = getRandomSkill(intensity);
    setCurrentSkill(newRandomSkill);
  };

  const cardTitle = currentSkill.name;
  const cardId = currentSkill.id;
  const cardDescription = currentSkill.description;
  const cardContent = currentSkill.content;

  return (
    <>
      <Card containerStyle={styles.card} style={{ flex: isFlipped ? 0 : 1 }}>
        <Text>{cardTitle}</Text>
        <Text>{cardDescription}</Text>
        <Button
          title="Next Skill"
          buttonStyle={{ backgroundColor: "#8CC0DE", height: 70 }}
          containerStyle={{ marginBottom: 10, width: 200 }}
          titleStyle={{ color: "black", fontSize: 22 }}
          onPress={handleNextSkill}
        ></Button>
      </Card>
      {/* <Card style={{ flex: isFlipped ? 1 : 0 }}>
        <Text>{cardTitle}</Text>
        <Text>{cardContent}</Text>
      </Card> */}
    </>
  );
};

export const SkillCardBack = ({ intensity }) => {
  console.log("SkillCard", intensity);

  const getRandomSkill = (intensity) => {
    const intensityArray = cardsArray.filter(
      (skill) => skill.intensity >= intensity
    );
    // console.log("intensityarray", intensityArray);
    return intensityArray[Math.floor(Math.random() * intensityArray.length)];
  };

  const [currentSkill, setCurrentSkill] = useState(getRandomSkill(intensity));
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextSkill = () => {
    const newRandomSkill = getRandomSkill(intensity);
    setCurrentSkill(newRandomSkill);
  };

  const cardTitle = currentSkill.name;
  const cardId = currentSkill.id;
  const cardDescription = currentSkill.description;
  const cardContent = currentSkill.content;

  return (
    <>
      <Card style={{ flex: isFlipped ? 1 : 0 }}>
        <Text>{cardTitle}</Text>
        <Text>{cardContent}</Text>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 20,
  },
});
