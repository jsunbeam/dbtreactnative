import { Button, Card, Text } from "react-native-elements";
import { cardsArray } from "../shared/cardsSlice";
import { useState } from "react";
import { StyleSheet } from "react-native";

// const [currentSkill, setCurrentSkill] = useState(getRandomSkill(intensity));

export const SkillCardFront = (props) => {
  const { intensity } = props;
  const { skill } = props;
  console.log("SkillCard", intensity);
  console.log("skill", skill);

  //   const getRandomSkill = (intensity) => {
  //     const intensityArray = cardsArray.filter(
  //       (skill) => skill.intensity >= intensity
  //     );
  //     // console.log("intensityarray", intensityArray);
  //     return intensityArray[Math.floor(Math.random() * intensityArray.length)];
  //   };

  //   const [currentSkill, setCurrentSkill] = useState(getRandomSkill(intensity));
  //   const [isFlipped, setIsFlipped] = useState(false);

  //   const handleNextSkill = () => {
  //     const newRandomSkill = getRandomSkill(intensity);
  //     setCurrentSkill(newRandomSkill);
  //   };

  const cardTitle = skill.name;
  const cardId = skill.id;
  const cardDescription = skill.description;
  const cardContent = skill.content;

  return (
    <>
      <Card containerStyle={styles.card}>
        <Text>{cardTitle}</Text>
        <Text>{cardDescription}</Text>
        <Button
          title="Next Skill"
          buttonStyle={{ backgroundColor: "#8CC0DE", height: 70 }}
          containerStyle={{ marginBottom: 10, width: 200 }}
          titleStyle={{ color: "black", fontSize: 22 }}
          //   onPress={handleNextSkill}
        ></Button>
      </Card>
      {/* <Card style={{ flex: isFlipped ? 1 : 0 }}>
        <Text>{cardTitle}</Text>
        <Text>{cardContent}</Text>
      </Card> */}
    </>
  );
};

export const SkillCardBack = (props) => {
  const { intensity } = props;
  const { skill } = props;
  console.log("SkillCard", intensity);

  //   const handleNextSkill = () => {
  //     const newRandomSkill = getRandomSkill(intensity);
  //     setCurrentSkill(newRandomSkill);
  //   };

  const cardTitle = skill.name;
  const cardId = skill.id;
  const cardDescription = skill.description;
  const cardContent = skill.content;

  return (
    <>
      <Card>
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
