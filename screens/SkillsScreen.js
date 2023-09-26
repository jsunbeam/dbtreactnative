import { SkillCardBack, SkillCardFront } from "../components/SkillCard";
import { StyleSheet, View } from "react-native";
import FlipCard from "../components/FlipCard";
import { Card } from "react-native-elements";
import { Text } from "react-native";

const SkillsScreen = ({ route, navigation }) => {
  const { intensity } = route.params;
  console.log("skillsscreen intensity", intensity);
  return (
    <View style={styles.container}>
      <FlipCard
        front={
          <Card>
            <SkillCardFront intensity={intensity} />
          </Card>
        }
        back={
          <Card>
            <SkillCardBack intensity={intensity} />
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
