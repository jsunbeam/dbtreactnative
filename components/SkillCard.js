import { Card, Text } from "react-native-elements";
import { cardsArray } from "../shared/cardsSlice";
import { useState } from "react";

const SkillCard = ({ intensity }) => {
  console.log("SkillCard", intensity);
  const getRandomSkill = (intensity) => {
    const intensityArray = cardsArray.filter(
      (skill) => skill.intensity >= intensity
    );
    // console.log("intensityarray", intensityArray);
    return intensityArray[Math.floor(Math.random() * intensityArray.length)];
  };

  const [currentSkill, setCurrentSkill] = useState(getRandomSkill(intensity));

  const cardTitle = currentSkill.name;
  const cardId = currentSkill.id;
  const cardDescription = currentSkill.description;
  const cardContent = currentSkill.content;

  return (
    <Card>
      <Text>{cardTitle}</Text>
      <Text>{cardDescription}</Text>
    </Card>
  );
};

export default SkillCard;
