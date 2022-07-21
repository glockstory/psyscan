import React from "react";
import { Text, SafeAreaView } from "react-native";
import Line from "../Other/Line";
function PreliminaryDescription() {
  return (
    <SafeAreaView style={{ width: "50%", alignItems: "center" }}>
      <Text
        style={{
          color: "white",
          fontSize: 24,
          textAlign: "center",
        }}
      >
        PRELIMINARY TESTING
      </Text>
      <Line></Line>
      <Text
        style={{
          color: "white",
          fontSize: 16,
          textAlign: "center",
        }}
      >
        HOW MUCH DO YOU FEEL DOUBTS ABOUT YOUR SEXUAL ORIENTATION
      </Text>
    </SafeAreaView>
  );
}

export default PreliminaryDescription;
