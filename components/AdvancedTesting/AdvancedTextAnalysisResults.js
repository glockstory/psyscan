import { View, Text, Image, TextInput, SafeAreaView } from "react-native";
import React, { useState } from "react";
import LinearArea from "../Other/LinearArea";
import AdvancedDescription from "./AdvancedDescription";
import Slider from "@react-native-community/slider";

export default function AdvancedTextAnalysisResults() {
  const [agreeablenessValue, setValueAgreeableness] = useState(90);
  const [conscientiousnessValue, setValueConscientiousness] = useState(90);
  const [achieveValue, setValueAchieve] = useState(90);
  const [dutifulnessValue, setValueDutifulness] = useState(90);
  const [selfDisciplineValue, setValueSelfDiscipline] = useState(90);
  return (
    <LinearArea>
      <AdvancedDescription>YOUR RESULTS</AdvancedDescription>
      <Text textAlign={"center"}>AGREEABLENESS: {agreeablenessValue}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        step={1}
        minimumTrackTintColor="cyan"
        accessibilityLabel="hel"
        onValueChange={(value) => setValueAgreeableness(value)}
      ></Slider>
      <Text textAlign={"center"}>
        CONSCIENTIOUSNESS: {conscientiousnessValue}{" "}
      </Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        step={1}
        minimumTrackTintColor="cyan"
        onValueChange={(value) => setValueConscientiousness(value)}
      ></Slider>
      <Text textAlign={"center"}>ACHIEVEMENT STRIVING: {achieveValue}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        step={1}
        minimumTrackTintColor="cyan"
        onValueChange={(value) => setValueAchieve(value)}
      ></Slider>
      <Text textAlign={"center"}>DUTIFULNESS: {dutifulnessValue}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        step={1}
        minimumTrackTintColor="cyan"
        onValueChange={(value) => setValueDutifulness(value)}
      ></Slider>
      <Text textAlign={"center"}>SELF-DISCIPLINE: {selfDisciplineValue}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        step={1}
        minimumTrackTintColor="cyan"
        onValueChange={(value) => setValueSelfDiscipline(value)}
      ></Slider>
    </LinearArea>
  );
}
