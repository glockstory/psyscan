import React from "react";
import { Text, View, TextInput } from "react-native";
import IconRow from "../Other/IconRow";
import { styles } from "../../styles/style";
import GradientButton from "../Buttons/GradientButton";
import LinearArea from "../Other/LinearArea";
import { loginPageStyles } from "../../styles/loginPage";
export default function LoginPage({ navigation }) {
  return (
    <LinearArea visibility={false}>
      <Text style={loginPageStyles.title}>Welcome</Text>
      <Text style={loginPageStyles.registrationText}>EMAIL</Text>
      <TextInput style={styles.input} placeholder="example@example.com" />
      <Text style={loginPageStyles.registrationText}>PASSWORD</Text>
      <TextInput style={styles.input} placeholder="*********" />
      <Text style={{ color: "white" }}>FORGOT PASSWORD?</Text>
      <IconRow></IconRow>
      <View
        style={{ flexDirection: "column", justifyContent: "space-between" }}
      >
        <GradientButton
          heightProps={40}
          widthProps={175}
          fontSizeProps={18}
          title={"LOG IN"}
          onPress={() => navigation.navigate("ChooseTest")}
        />
        <GradientButton
          heightProps={40}
          widthProps={175}
          fontSizeProps={18}
          title={"REGISTER"}
          onPress={() => navigation.navigate("Registration")}
        />
      </View>
    </LinearArea>
  );
}
