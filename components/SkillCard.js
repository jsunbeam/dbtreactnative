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

  const cardTitle = skill.name;
  const cardId = skill.id;
  const cardDescription = skill.description;
  const cardContent = skill.content;

  return (
    <>
      <Card containerStyle={styles.card}>
        <Text>{cardTitle}</Text>
        <Text>{cardDescription}</Text>
      </Card>
    </>
  );
};

export const SkillCardBack = (props) => {
  const { intensity } = props;
  const { skill } = props;
  console.log("SkillCard", intensity);

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
