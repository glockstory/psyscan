import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../styles/style";

export default function LinearArea({children}) {
  return (
    <LinearGradient
      style={[
        styles.gradient,
        { alignItems: "center", justifyContent: "center" },
      ]}
      colors={["#66B6D3", "#0F86AB", "#005980"]}
      start={{
        x: 0,
        y: 0,
      }}
      end={{
        x: 0,
        y: 1,
      }}
    >
      {children}
    </LinearGradient>
  );
}
