import React from "react";
import { styles } from "../../styles/style";
import IconRow from "../Other/IconRow";
import GradientButton from "../Buttons/GradientButton.js";
import TextInputWrapper from "./TextInputWrapper";
import { LinearGradient } from "expo-linear-gradient";

function RegistrationPage() {
  return (
    <LinearGradient
      style={[styles.gradient, styles.centered]}
      colors={["#66B6D3", "#0F86AB", "#005980"]}
      start={{
        x: 0,
        y: 0,
      }}
      end={{
        x: 1,
        y: 1,
      }}
    >
      <TextInputWrapper name="FIRST NAME"></TextInputWrapper>
      <TextInputWrapper name="FAMILY NAME"></TextInputWrapper>
      <TextInputWrapper name="DATE OF BIRTH"></TextInputWrapper>
      <TextInputWrapper name="EMAIL"></TextInputWrapper>
      <TextInputWrapper name="MOBILE"></TextInputWrapper>
      <TextInputWrapper name="CREATE PASSWORD"></TextInputWrapper>
      <TextInputWrapper name="CONFIRM PASSWORD"></TextInputWrapper>
      <IconRow></IconRow>
      <GradientButton title="Register"></GradientButton>
    </LinearGradient>
  );
}

export default RegistrationPage;
