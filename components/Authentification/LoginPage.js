import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import IconRow from "../Other/IconRow";
import { styles } from "../../styles/style";
import GradientButton from "../Buttons/GradientButton";
import LinearArea from "../Other/LinearArea";
import { loginPageStyles } from "../../styles/loginPage";
import { useValidation } from "react-native-form-validator";

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("example");
  const {
    validate,
    isFieldInError,
    getErrorsInField,
    getErrorMessages,
    isFormValid,
  } = useValidation({
    state: {
      email,
      pass,
    },
  });

  const onPressLogin = () => {
    validate({
      email: { email: true },
      pass: { equalPassword: "example" },
    });
    if (isFormValid() === true) {
      navigation.navigate("ChooseTest");
    }
  };

  return (
    <LinearArea visibility={false}>
      <Text style={loginPageStyles.title}>Welcome</Text>
      <Text style={loginPageStyles.registrationText}>EMAIL</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="example@example.com"
      />
      {isFieldInError("email") &&
        getErrorsInField("email").map((errorMessage) => (
          <Text style={loginPageStyles.error}>{errorMessage}</Text>
        ))}
      <Text style={(loginPageStyles.registrationText, loginPageStyles.text)}>
        password
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setPass}
        value={pass}
        placeholder="*********"
      />
      {isFieldInError("pass") &&
        getErrorsInField("pass").map((errorMessage) => (
          <Text key={1} style={loginPageStyles.error}>
            {errorMessage}
          </Text>
        ))}
      <Text style={loginPageStyles.text}>forgot password?</Text>
      <IconRow></IconRow>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <GradientButton
          heightProps={40}
          widthProps={175}
          fontSizeProps={18}
          title={"LOG IN"}
          onPress={onPressLogin}
        />
        <GradientButton
          heightProps={40}
          widthProps={175}
          fontSizeProps={18}
          title={"REGISTER"}
          onPress={() => navigation.navigate("Registration")}
        />
        <Text style={loginPageStyles.error}>{getErrorMessages()}</Text>
      </View>
    </LinearArea>
  );
}
