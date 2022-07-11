import React from "react";
import { Button, Text, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles/style";

export default function WelcomePage({ navigation }) {
  const loadScene = () => {
    navigation.navigate("Login");
  };
  return (
    <LinearGradient
      style={[styles.gradient, styles.centered]}
      colors={["red", "yellow"]}
    >
      <Text style={styles.welcomeTo}>WELCOME TO</Text>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Button title={"Lets start"} onPress={loadScene} />
    </LinearGradient>
  );
}
