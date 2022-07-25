import React from "react";
import { SafeAreaView, Text, TextInput } from "react-native";
import { styles } from "../../styles/style";
import { registrationStyles } from "../../styles/registration";
function TextInputWrapper(props) {
  return (
    <SafeAreaView style={registrationStyles.content}>
      <Text style={registrationStyles.title}>{props.name}</Text>
      <TextInput
        value={props.value}
        onChangeText={props.setValue}
        style={styles.input}
      ></TextInput>
    </SafeAreaView>
  );
}

export default TextInputWrapper;
