import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../styles/style";
import PreliminaryDescription from "./PreliminaryDescription";
import GradientButton from "../Buttons/GradientButton";
import { View } from "react-native";
import LinearArea from "../Other/LinearArea";
function PreliminarySex() {
  return (
    <LinearArea>
      <PreliminaryDescription></PreliminaryDescription>
      <View style={{ marginTop: 25 }}>
        <GradientButton title="0%"></GradientButton>
        <GradientButton title="25%"></GradientButton>
        <GradientButton title="50%"></GradientButton>
        <GradientButton title="100%"></GradientButton>
      </View>
    </LinearArea>
  );
}

export default PreliminarySex;
