import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-web";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../styles/style";
import AdvancedDescription from "./AdvancedDescription";
import GradientButton from "../Buttons/GradientButton";

export default function AdvancedTesting() {
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
      <AdvancedDescription></AdvancedDescription>
      <GradientButton title={"YOUR ACTIVITY"}></GradientButton>
      <GradientButton title={"TEXT ANALYSIS"}></GradientButton>
      <GradientButton title={"AUDIO ANALYSIS"}></GradientButton>
      <GradientButton title={"FACE SCAN"}></GradientButton>
      <GradientButton title={"VIDEO ANALYSIS"}></GradientButton>
    </LinearGradient>
  );
}
