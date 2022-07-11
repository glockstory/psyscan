import React from "react";
import { Button, Text, Image, SafeAreaView } from "react-native";
import { styles } from "../styles/style";

export default function WelcomePage({ navigation }) {
  const loadScene = () => {
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView style={styles.centered}>
      <Text style={styles.welcomeTo}>WELCOME TO</Text>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Button title={"Lets start"} onPress={loadScene} />
    </SafeAreaView>
  );
}
