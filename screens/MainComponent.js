import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import HomeScreen from "./HomeScreen";
import ButtonsScreen from "./ButtonsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const screenOptions = {
  headerTintColor: "#000",
  headerStyle: { backgroundColor: "#FFD9C0" },
};

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Home",
          headerLeft: () => (
            <Icon name="home" type="font-awesome" style={{ marginLeft: 20 }} />
          ),
        })}
      />
      <Stack.Screen
        name="ButtonsScreen"
        component={ButtonsScreen}
        options={({ navigation }) => ({
          title: "Choose Your Emotion or Urge",
        })}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveBackgroundColor: "black", // Change this for the active tab background color
        tabBarInactiveBackgroundColor: "#FFD9C0", // Change this for the inactive tab background color
        tabBarLabelStyle: { fontSize: 18 },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
      })}
      tabBarOptions={{
        style: { backgroundColor: "#FFD9C0" },
        labelStyle: { fontSize: 18, color: "black" },
      }}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
    </Tab.Navigator>
  );
};

export default Main;
