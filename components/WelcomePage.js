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
    <LinearArea visibility={false}>
      <Text style={styles.welcomeTo}>Welcome to</Text>
      <Image source={require("../assets/logoNew.png")} style={styles.logoNew} />
      <BlueButton title={"Lets start"} onPress={loadScene}></BlueButton>
    </LinearArea>
  );
}
