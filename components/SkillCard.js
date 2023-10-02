import { Button, Card, Icon, Text } from "react-native-elements";
import { cardsArray } from "../shared/cardsSlice";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

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
        <View>
          <Icon
            name={props.isFavorite ? "heart" : "heart-o"}
            type="font-awesome"
            color="#f50"
            raised
            reverse
            onPress={() =>
              props.isFavorite
                ? console.log("Already set as a favorite")
                : props.markFavorite()
            }
          />
        </View>
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
