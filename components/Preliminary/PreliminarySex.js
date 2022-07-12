import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../styles/style";
import PreliminaryDescription from "./PreliminaryDescription";
import GradientButton from "../Buttons/GradientButton";
import { View } from "react-native";
function PreliminarySex() {
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
        x: 1,
        y: 1,
      }}
    >
      <PreliminaryDescription></PreliminaryDescription>
      <View style={{ marginTop: 25 }}>
        <GradientButton title="0%"></GradientButton>
        <GradientButton title="25%"></GradientButton>
        <GradientButton title="50%"></GradientButton>
        <GradientButton title="100%"></GradientButton>
      </View>
    </LinearGradient>
  );
}

export default PreliminarySex;
