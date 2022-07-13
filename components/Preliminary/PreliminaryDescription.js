import React from "react";
import { Text, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native-web";
function PreliminaryDescription() {
  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <Text
        style={{
          color: "white",
          fontSize: 24,
          textAlign: "center",
        }}
      >
        PRELIMINARY TESTING
      </Text>
      <Text
        style={{
          borderBottomColor: "white",
          borderBottomWidth: StyleSheet.hairlineWidth,
          paddingHorizontal: 50,
          marginBottom: 10,
        }}
      ></Text>
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
