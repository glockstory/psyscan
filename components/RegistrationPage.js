import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "../styles/style";
import IconRow from "./IconRow";
import GradientButton from ".//Buttons/GradientButton.js";
import TextInputWrapper from "./TextInputWrapper";

function RegistrationPage() {
  return (
    <SafeAreaView style={styles.centered}>
      <TextInputWrapper name="First Name"></TextInputWrapper>
      <TextInputWrapper name="Family Name"></TextInputWrapper>
      <TextInputWrapper name="Date of Birth"></TextInputWrapper>
      <TextInputWrapper name="Email"></TextInputWrapper>
      <TextInputWrapper name="Mobile"></TextInputWrapper>
      <TextInputWrapper name="Create Password"></TextInputWrapper>
      <TextInputWrapper name="Confirm Password"></TextInputWrapper>
      <IconRow></IconRow>
      <GradientButton title="Register"></GradientButton>
    </SafeAreaView>
  );
}

export default RegistrationPage;
