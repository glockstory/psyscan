import { View, Text, Image } from "react-native";
import React from "react";
import LinearArea from "../Other/LinearArea";
import AdvancedDescription from "./AdvancedDescription";
import GradientButton from "../Buttons/GradientButton";

export default function AdvancedTextAnalysis() {
  return (
    <LinearArea>
      <AdvancedDescription>YOUR ACTIVITY</AdvancedDescription>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 124, height: 132 }}
          source={require("../../assets/TextAnalysis.png")}
        ></Image>
        
        <GradientButton title={"NEXT"}></GradientButton>
      </View>
    </LinearArea>
  );
}
