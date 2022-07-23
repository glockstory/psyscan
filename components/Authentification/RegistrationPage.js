import React, { useState } from "react";
import IconRow from "../Other/IconRow";
import GradientButton from "../Buttons/GradientButton.js";
import TextInputWrapper from "../Other/TextInputWrapper";
import { Text } from "react-native";
import LinearArea from "../Other/LinearArea";
import { useValidation } from "react-native-form-validator";

function RegistrationPage({ navigation }) {
  const [name, setName] = useState("Your name");
  const [secondName, setSecondName] = useState("Your second name");
  const [email, setEmail] = useState("example@gmail.com");
  const [number, setNumber] = useState("88888888888");
  const [date, setDate] = useState("2022-12-31");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { validate, getErrorMessages, isFormValid } = useValidation({
    state: {
      name,
      email,
      secondName,
      number,
      date,
      newPassword,
      confirmPassword,
    },
  });

  const _onPressButton = () => {
    validate({
      name: { minlength: 3, maxlength: 15, required: true },
      email: { email: true },
      number: { numbers: true },
      date: { date: "YYYY-MM-DD" },
      confirmPassword: { equalPassword: newPassword },
      secondName: { minlength: 2, maxlength: 102, required: true },
    });
    if (isFormValid() === true) {
      navigation.navigate("Login");
    }
  };

  return (
    <LinearArea>
      <TextInputWrapper
        value={name}
        setValue={setName}
        name="FIRST NAME"
      ></TextInputWrapper>
      <TextInputWrapper
        value={secondName}
        setValue={setSecondName}
        name="FAMILY NAME"
      ></TextInputWrapper>
      <TextInputWrapper
        value={date}
        setValue={setDate}
        name="DATE OF BIRTH"
      ></TextInputWrapper>
      <TextInputWrapper
        value={email}
        setValue={setEmail}
        name="EMAIL"
      ></TextInputWrapper>
      <TextInputWrapper
        value={number}
        setValue={setNumber}
        name="MOBILE"
      ></TextInputWrapper>
      <TextInputWrapper
        value={newPassword}
        setValue={setNewPassword}
        name="CREATE PASSWORD"
      ></TextInputWrapper>
      <TextInputWrapper
        value={confirmPassword}
        setValue={setConfirmPassword}
        name="CONFIRM PASSWORD"
      ></TextInputWrapper>
      <IconRow></IconRow>
      <GradientButton
        title="Register"
        onPress={_onPressButton}
      ></GradientButton>
      <Text style={{ marginVertical: 10, color: "red" }}>
        {getErrorMessages()}
      </Text>
    </LinearArea>
  );
}

export default RegistrationPage;
