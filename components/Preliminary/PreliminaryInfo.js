import React from "react";
import { Picker } from "@react-native-picker/picker";
import { Text } from "react-native";
import LinearArea from "../Other/LinearArea";
import TextInputWrapper from "../Other/TextInputWrapper";
import { registrationStyles } from "../../styles/registration";
function PreliminaryInfo() {
  return (
    <LinearArea>
      <Text style={registrationStyles.title}>GENDER</Text>
      <Picker></Picker>
      <TextInputWrapper name="NATIONALITY"></TextInputWrapper>
      <Text style={registrationStyles.title}>LOCATION</Text>
      <Picker></Picker>
      <TextInputWrapper name="OCCUPATION"></TextInputWrapper>
      <TextInputWrapper name="EDUCATION"></TextInputWrapper>
    </LinearArea>
  );
}

export default PreliminaryInfo;
