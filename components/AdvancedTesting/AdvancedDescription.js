import React from "react";
import { Text, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native-web";

export default function AdvancedDescription() {
  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <Text
        style={{
          color: "white",
          fontSize: 24,
          textAlign: "center",
        }}
      >
        ADVANCED TESTING
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
          width: 220,
          marginBottom: '40%'
        }}
      >
        Full test contains five different sections. To get to know you better,
        it is recommended to complete all five of them.
      </Text>
    </SafeAreaView>
  );
}
