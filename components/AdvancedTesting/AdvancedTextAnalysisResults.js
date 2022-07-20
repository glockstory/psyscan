import { View, Text, Image, TextInput, SafeAreaView } from "react-native";
import React, { useState } from "react";
import LinearArea from "../Other/LinearArea";
import AdvancedDescription from "./AdvancedDescription";
import Slider from "@react-native-community/slider";
import GradientButton from "../Buttons/GradientButton";

export default function AdvancedTextAnalysisResults() {
  const [agreeablenessValue, setValueAgreeableness] = useState(90);
  const [conscientiousnessValue, setValueConscientiousness] = useState(52);
  const [achieveValue, setValueAchieve] = useState(59);
  const [dutifulnessValue, setValueDutifulness] = useState(78);
  const [selfDisciplineValue, setValueSelfDiscipline] = useState(41);

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
        value={agreeablenessValue}
        onValueChange={(value) => setValueAgreeableness(value)}
      ></Slider>
      <Text textAlign={"center"}>
        CONSCIENTIOUSNESS: {conscientiousnessValue}
      </Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        step={1}
        minimumTrackTintColor="cyan"
        value={conscientiousnessValue}
        onValueChange={(value) => setValueConscientiousness(value)}
      ></Slider>
      <Text textAlign={"center"}>ACHIEVEMENT STRIVING: {achieveValue}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        step={1}
        minimumTrackTintColor="cyan"
        value={achieveValue}
        onValueChange={(value) => setValueAchieve(value)}
      ></Slider>
      <Text textAlign={"center"}>DUTIFULNESS: {dutifulnessValue}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        step={1}
        minimumTrackTintColor="cyan"
        value={dutifulnessValue}
        onValueChange={(value) => setValueDutifulness(value)}
      ></Slider>
      <Text textAlign={"center"}>SELF-DISCIPLINE: {selfDisciplineValue}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        step={1}
        minimumTrackTintColor="cyan"
        value={selfDisciplineValue}
        onValueChange={(value) => setValueSelfDiscipline(value)}
      ></Slider>
      <GradientButton title={"MORE DETAILS"}></GradientButton>
    </LinearArea>
  );
}
