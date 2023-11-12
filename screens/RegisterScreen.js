import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { CheckBox, Input, Button, Icon } from "react-native-elements";
import * as SecureStore from "expo-secure-store";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, db } from "../firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { addXP } from "../redux/xpSlice";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [user, setUser] = useState();

  const auth = getAuth(app);
  const handleRegister = () => {
    if (email.includes("@") && password.length >= 6) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("user on register", user);

          // Create a document for the user
          await setDoc(doc(db, "users", user.uid), {
            xp: 0, // Set initial XP value
          });

          // Dispatch the action to save the XP in the Redux store
          dispatch(addXP(0));

          // Navigate to the new page, passing the user's XP as a parameter
          //   navigation.navigate("NewPage", { xp: 0 });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      //handles validation error
      let errorMessage = "";

      if (!email.includes("@")) {
        errorMessage += "Invalid email address. ";
      }

      if (password.length < 6) {
        errorMessage += "Password should be at least 6 characters long.";
      }

      if (errorMessage) {
        alert(errorMessage);
      } else {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // You can add more code here if you want to do something with the user object
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // Handle errors here
            alert(`Error: ${errorMessage}`);
          });
      }
    }
    if (remember) {
      SecureStore.setItemAsync(
        "userinfo",
        JSON.stringify({
          email,
          password,
        })
      ).catch((error) => console.log("Could not save user info", error));
    } else {
      SecureStore.deleteItemAsync("userinfo").catch((error) =>
        console.log("Could not delete user info", error)
      );
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Input
          placeholder="Email"
          leftIcon={{ type: "font-awesome", name: "envelope-o" }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          containerStyle={styles.formInput}
          leftIconContainerStyle={styles.formIcon}
        />
        <Input
          placeholder="Password"
          leftIcon={{ type: "font-awesome", name: "key" }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          containerStyle={styles.formInput}
          leftIconContainerStyle={styles.formIcon}
        />
        <CheckBox
          title="Remember Me"
          center
          checked={remember}
          onPress={() => setRemember(!remember)}
          containerStyle={styles.formCheckbox}
        />
        <View style={styles.formButton}>
          <Button
            onPress={() => handleRegister()}
            title="Register"
            color="#5637DD"
            icon={
              <Icon
                name="user-plus"
                type="font-awesome"
                color="#fff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{ backgroundColor: "#5637DD" }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 10,
  },
  formIcon: {
    marginRight: 10,
  },
  formInput: {
    padding: 8,
    height: 60,
  },
  formCheckbox: {
    margin: 8,
    backgroundColor: null,
  },
  formButton: {
    margin: 20,
    marginRight: 40,
    marginLeft: 40,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 10,
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default RegisterScreen;
