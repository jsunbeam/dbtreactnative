import { Text } from "react-native";
import { buttonsInfo } from "../shared/buttonsSlice";
import { Button } from "react-native-elements";

const ButtonsScreen = ({ route, navigation }) => {
  const { selectedButton } = route.params;
  return (
    <>
      {buttonsInfo[selectedButton].map((emotion) => {
        return <Button key={emotion} title={emotion} />;
      })}
    </>
  );
};

export default ButtonsScreen;
