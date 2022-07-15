import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import LinearArea from "../Other/LinearArea";
import AdvancedDescription from "./AdvancedDescription";
import GradientButton from "../Buttons/GradientButton";
import PickerLanguage from "./Components/PickerLanguage";
import { CheckBox } from "react-native-web";
import PickerLangLevel from "./Components/PickerLangLevel";

export default function AdvancedTextAnalysisWriting() {
  return (
    <LinearArea>
      <AdvancedDescription></AdvancedDescription>
      <TextInput></TextInput>
    </LinearArea>
  );
}
