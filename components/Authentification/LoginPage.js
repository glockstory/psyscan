import React from "react";
import { Text, View, TextInput } from "react-native";
import IconRow from "../Other/IconRow";
import { styles } from "../../styles/style";
import GradientButton from "../Buttons/GradientButton";
import LinearArea from "../Other/LinearArea";

export default function LoginPage({ navigation }) {
  return (
    <LinearArea>
      <Text style={styles.welcomeTo}>WELCOME</Text>
      <Text style={styles.registrationText}>EMAIL</Text>
      <TextInput style={styles.input} placeholder="example@example.com" />
      <Text style={styles.registrationText}>PASSWORD</Text>
      <TextInput style={styles.input} placeholder="*********" />
      <Text style={{ color: "white" }}>FORGOT PASSWORD?</Text>
      <IconRow></IconRow>
      <View
        style={{ flexDirection: "column", justifyContent: "space-between" }}
      >
        <GradientButton
          heightProps={50}
          widthProps={175}
          fontSizeProps={24}
          title={"LOG IN"}
          onPress={() => navigation.navigate("ChooseTest")}
        />
        <GradientButton
          heightProps={50}
          widthProps={175}
          fontSizeProps={24}
          title={"REGISTER"}
          onPress={() => navigation.navigate("Registration")}
        />
      </View>
    </LinearArea>
  );
}
