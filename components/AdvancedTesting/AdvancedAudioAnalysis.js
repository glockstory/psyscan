import { View, Text, Image } from "react-native";
import React from "react";
import LinearArea from "../Other/LinearArea";
import AdvancedDescription from "./AdvancedDescription";
import GradientButton from "../Buttons/GradientButton";
import Slider from "@react-native-community/slider";

export default function AdvancedAudioAnalysis() {
  return (
    <LinearArea>
      <AdvancedDescription></AdvancedDescription>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 132, height: 212 }}
          source={require("../../assets/microphone.png")}
        ></Image>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="cyan"
        ></Slider>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            textAlign: "center",
            width: 280,
          }}
        >
          Now you will be asked to do the audio recording, follow the
          instruction to get through the test
        </Text>
        <GradientButton title={"START RECORDING"}></GradientButton>
      </View>
    </LinearArea>
  );
}
