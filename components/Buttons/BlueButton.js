import React from "react";
import { buttonStyles } from "../../styles/buttons";
import { TouchableOpacity, Text } from "react-native";
const BlueButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={buttonStyles.blueButtonContainer}>
    <Text style={buttonStyles.blueButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default BlueButton;
