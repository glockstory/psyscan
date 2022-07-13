import React from "react";
import { styles } from "../../styles/style";
import IconRow from "../Other/IconRow";
import GradientButton from "../Buttons/GradientButton.js";
import TextInputWrapper from "../Other/TextInputWrapper";
import { LinearGradient } from "expo-linear-gradient";
import LinearArea from "../Other/LinearArea";

function RegistrationPage({ navigation }) {
  return (
    <LinearArea>
      <TextInputWrapper name="FIRST NAME"></TextInputWrapper>
      <TextInputWrapper name="FAMILY NAME"></TextInputWrapper>
      <TextInputWrapper name="DATE OF BIRTH"></TextInputWrapper>
      <TextInputWrapper name="EMAIL"></TextInputWrapper>
      <TextInputWrapper name="MOBILE"></TextInputWrapper>
      <TextInputWrapper name="CREATE PASSWORD"></TextInputWrapper>
      <TextInputWrapper name="CONFIRM PASSWORD"></TextInputWrapper>
      <IconRow></IconRow>
      <GradientButton
        title="Register"
        onPress={() => navigation.navigate("Login")}
      ></GradientButton>
    </LinearArea>
  );
}

export default RegistrationPage;
