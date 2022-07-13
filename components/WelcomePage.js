import React from "react";
import { Text, Image } from "react-native";
import { styles } from "../styles/style";
import BlueButton from "./Buttons/BlueButton";
import LinearArea from "./Other/LinearArea";

export default function WelcomePage({ navigation }) {
  const loadScene = () => {
    navigation.navigate("Login");
  };
  return (
    <LinearArea>
      <Text style={styles.welcomeTo}>WELCOME TO</Text>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <BlueButton title={"Lets start"} onPress={loadScene}></BlueButton>
    </LinearArea>
  );
}
