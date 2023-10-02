import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from "./screens/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
