import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-web";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../styles/style";
import AdvancedDescription from "./AdvancedDescription";
import GradientButton from "../Buttons/GradientButton";
import LinearArea from "../Other/LinearArea";

export default function AdvancedTesting({ navigation }) {
  return (
    <LinearArea>
      <AdvancedDescription>
        Full test contains five different sections. To get to know you better,
        it is recommended to complete all five of them.
      </AdvancedDescription>
      <GradientButton
        title={"YOUR ACTIVITY"}
        onPress={() => navigation.navigate("AdvancedYourActivity")}
      ></GradientButton>
      <GradientButton
        title={"TEXT ANALYSIS"}
        onPress={() => navigation.navigate("AdvancedTextAnalysis")}
      ></GradientButton>
      <GradientButton
        title={"AUDIO ANALYSIS"}
        onPress={() => navigation.navigate("AdvancedAudioAnalysis")}
      ></GradientButton>
      <GradientButton
        title={"FACE SCAN"}
        onPress={() => navigation.navigate("AdvancedFaceScan")}
      ></GradientButton>
      <GradientButton
        title={"VIDEO ANALYSIS"}
        onPress={() => navigation.navigate("AdvancedVideoAnalysis")}
      ></GradientButton>
    </LinearArea>
  );
}
