import SkillCard from "../components/SkillCard";
import { View } from "react-native";

const SkillsScreen = ({ route, navigation }) => {
  const { intensity } = route.params;
  console.log("skillsscreen intensity", intensity);
  return (
    <View>
      <SkillCard intensity={intensity} />
    </View>
  );
};

export default SkillsScreen;
