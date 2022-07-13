import { View, Text, Image } from "react-native";
import React from "react";
import LinearArea from "../Other/LinearArea";
import AdvancedDescription from "./AdvancedDescription";
import GradientButton from "../Buttons/GradientButton";

export default function AdvancedYourActivity() {
  return (
    <LinearArea>
      <AdvancedDescription>YOUR ACTIVITY</AdvancedDescription>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 124, height: 132 }}
          source={require("../../assets/YourActivity.png")}
        ></Image>

        <Text
          style={{
            color: "white",
            fontSize: 16,
            textAlign: "center",
            width: 280,
          }}
        >
          YOU CAN CONNECT PSYSCAN WITH YOUR HEALTH DATA AND SOCIAL MEDIA TO BE
          MONITORED DAILY
        </Text>
        <GradientButton title={"CONNECT"}></GradientButton>
        <GradientButton title={'COMPLETE MANUALLY'}></GradientButton>
      </View>
    </LinearArea>
  );
}
