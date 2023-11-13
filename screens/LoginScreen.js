import { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { CheckBox, Input, Button, Icon } from "react-native-elements";
import * as SecureStore from "expo-secure-store";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUid, setXP } from "../redux/userSlice";
import { db } from "../firebase.config";
import { collection, doc, getDoc } from "firebase/firestore";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [xpAtLogin, setXpAtLogin] = useState(0);
  const dispatch = useDispatch();

  const handleLogin = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(setUid(user.uid));
        console.log("user", user);

        //retrieve XP from firestore
        const userRef = doc(collection(db, "users"), user.uid);
        console.log(userRef);
        getDoc(userRef)
          .then((doc) => {
            if (doc.exists()) {
              const xp = doc.data().xp;
              console.log("XP from firestore at login:", xp);
              dispatch(setXP(xp));
              // Do something with the XP data
            } else {
              console.log("User document does not exist");
            }
          })
          .catch((error) => {
            console.log("Error retrieving XP:", error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
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

  useEffect(() => {
    SecureStore.getItemAsync("userinfo").then((userdata) => {
      const userinfo = JSON.parse(userdata);
      if (userinfo) {
        setEmail(userinfo.email);
        setPassword(userinfo.password);
        setRemember(true);
      }
    });
  }, []);

  return (
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
          onPress={() => handleLogin()}
          title="Login"
          titleStyle={{ color: "#000" }}
          icon={
            <Icon
              name="sign-in"
              type="font-awesome"
              color="#000"
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={{ backgroundColor: "#8CC0DE" }}
        />
      </View>
      <View style={styles.formButton}>
        <Button
          onPress={() => navigation.navigate("Register")}
          title="Register"
          type="clear"
          icon={
            <Icon
              name="user-plus"
              type="font-awesome"
              color="black"
              iconStyle={{ marginRight: 10 }}
            />
          }
          titleStyle={{ color: "black" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "left",
    padding: 10,
    backgroundColor: "#FAF0D7",
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

export default LoginScreen;
