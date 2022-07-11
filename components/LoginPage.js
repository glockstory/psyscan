import React from "react";
import { Button, Text, View, SafeAreaView, TextInput } from "react-native";
import IconRow from "./IconRow";
import { styles } from "../styles/style";

export default function LoginPage({ navigation }) {
  return (
    <SafeAreaView style={styles.centered}>
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
        <Button
          title={"LOGIN"}
          onPress={() => navigation.navigate("ChooseTest")}
        />
        <Text> </Text>
        <Button
          title={"REGISTER"}
          onPress={() => navigation.navigate("Registration")}
        />
      </View>
    </SafeAreaView>
  );
}
