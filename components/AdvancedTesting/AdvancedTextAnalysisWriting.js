import { View, Text, Image, TextInput, SafeAreaView } from "react-native";
import React from "react";
import LinearArea from "../Other/LinearArea";
import AdvancedDescription from "./AdvancedDescription";
import { styles } from "../../styles/style";
import GradientButton from "../Buttons/GradientButton";

export default function AdvancedTextAnalysisWriting() {
  return (
    <LinearArea>
      <AdvancedDescription></AdvancedDescription>
      <TextInput
        editable
        maxLength={300}
        multiline={true}
        numberOfLines={4}
        style={{
          backgroundColor: "#d7d7d7",
          borderRadius: 10,
          width: 300,
          height: 500,
          marginTop: -30
        }}
      ></TextInput>
      <GradientButton title={'Save'}></GradientButton>
    </LinearArea>
  );
}
