import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
function Line() {
  return (
    <Text
      style={{
        borderBottomColor: "white",
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 50,
        marginBottom: 10,
      }}
    ></Text>
  );
}

export default Line;
