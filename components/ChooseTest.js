import React from "react";
import { Button, Text, View, SafeAreaView, TextInput } from "react-native";
import { styles } from "../styles/style";
import BlueButton from "./Buttons/GradientButton";

export default function ChooseTest() {
  return (
    <SafeAreaView style={styles.centered}>
      <Text style={{ position: "relative", fontSize: 30, color: "white" }}>
        LET US GET TO KNOW YOU BETTER
      </Text>
      <View>
        <BlueButton title={"PRELIMINARY TESTING"} />
        <BlueButton title={"ADVANCED TESTING"} />
        <BlueButton title={"GET RESULT"} />
      </View>
    </SafeAreaView>
  );
}
