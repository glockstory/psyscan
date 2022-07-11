import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "../styles/style";
import IconRow from "./IconRow";
import GradientButton from ".//Buttons/GradientButton.js";
import TextInputWrapper from "./TextInputWrapper";

function RegistrationPage() {
  return (
    <SafeAreaView style={styles.centered}>
      <TextInputWrapper name="FIRST NAME"></TextInputWrapper>
      <TextInputWrapper name="FAMILY NAME"></TextInputWrapper>
      <TextInputWrapper name="DATE OF BIRTH"></TextInputWrapper>
      <TextInputWrapper name="EMAIL"></TextInputWrapper>
      <TextInputWrapper name="MOBILE"></TextInputWrapper>
      <TextInputWrapper name="CREATE PASSWORD"></TextInputWrapper>
      <TextInputWrapper name="CONFIRM PASSWORD"></TextInputWrapper>
      <IconRow></IconRow>
      <GradientButton title="Register"></GradientButton>
    </SafeAreaView>
  );
}

export default RegistrationPage;
