import { View, Text, Image } from "react-native";
import React from "react";
import LinearArea from "../Other/LinearArea";
import AdvancedDescription from "./AdvancedDescription";
import GradientButton from "../Buttons/GradientButton";

export default function AdvancedVideoAnalysis() {
  return (
    <LinearArea>
      <AdvancedDescription>FACE SCAN</AdvancedDescription>
      <Image
        style={{ width: 200, height: 200, marginBottom: 10}}
        source={require("../../assets/videoanalysis.png")}
      ></Image>
      <Text
        style={{
          color: "white",
          fontSize: 16,
          textAlign: "center",
          marginBottom: 5,
          width: 300,
        }}
      >
        Explain what is going to happen, why we need to scan. Give instuctions
        to the user.
      </Text>
      <GradientButton title={'START THE SCAN'}></GradientButton>
    </LinearArea>
  );
}
