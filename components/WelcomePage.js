import React from "react";
import { Button, Text, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
