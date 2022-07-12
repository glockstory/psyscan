import React from "react";
import { Button, Text, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles/style";
import BlueButton from "./Buttons/BlueButton";

export default function WelcomePage({ navigation }) {
  const loadScene = () => {
    navigation.navigate("Login");
  };
  return (
    <LinearGradient
      style={[styles.gradient, styles.centered]}
      colors={["#66B6D3", "#0F86AB", "#005980"]}
      start={{
        x: 0,
        y: 0,
      }}
      end={{
        x: 1,
        y: 1,
      }}
    >
      <Text style={styles.welcomeTo}>WELCOME TO</Text>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <BlueButton title={"Lets start"} onPress={loadScene}></BlueButton>
    </LinearGradient>
  );
}
