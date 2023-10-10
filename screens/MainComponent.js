import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import HomeScreen from "./HomeScreen";
import AccountScreen from "./AccountScreen";
import ButtonsScreen from "./ButtonsScreen";
import IntensityScreen from "./IntensityScreen";
import SkillsScreen from "./SkillsScreen";
import FavoritesScreen from "./FavoritesScreen";
import SingleSkillScreen from "./SingleSkillScreen";
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
      <Stack.Screen
        name="IntensityScreen"
        component={IntensityScreen}
        options={({ navigation }) => ({
          title: "Intensity",
        })}
      />
      <Stack.Screen
        name="Skills"
        component={SkillsScreen}
        options={({ navigation }) => ({
          title: "DBT Skills",
        })}
      />
    </Stack.Navigator>
  );
};

const AccountNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={({ navigation }) => ({
          title: "Account",
          headerLeft: () => (
            <Icon name="user" type="font-awesome" style={{ marginLeft: 20 }} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const FavoritesNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={({ navigation }) => ({
          title: "Favorites",
          headerLeft: () => (
            <Icon name="heart" type="font-awesome" style={{ marginLeft: 20 }} />
          ),
        })}
      />
      <Stack.Screen
        name="SingleSkill"
        component={SingleSkillScreen}
        options={({ navigation }) => ({
          title: "Favorite Skill",
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
        tabBarLabelStyle: { fontSize: 18 },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
      })}
      tabBarOptions={{
        style: { backgroundColor: "#FFD9C0" },
        labelStyle: { fontSize: 18, color: "black" },
        activeBackgroundColor: "#FFCAA7",
        inactiveBackgroundColor: "#FFD9C0",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: () => (
            <Icon name="home" type="font-awesome" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          tabBarIcon: () => (
            <Icon name="heart" type="font-awesome" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: () => (
            <Icon name="user" type="font-awesome" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
