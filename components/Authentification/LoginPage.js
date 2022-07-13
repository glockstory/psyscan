import React from "react";
import { Text, View, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
          title={"LOGIN"}
          onPress={() => navigation.navigate("ChooseTest")}
        />
        <Text> </Text>
        <GradientButton
          title={"REGISTER"}
          onPress={() => navigation.navigate("Registration")}
        />
      </View>
    </LinearArea>
  );
}
