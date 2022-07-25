import React from "react";
import { buttonStyles } from "../../styles/buttons";
import { TouchableOpacity, Text } from "react-native";
const BlueButton = ({ onPress, title, fontSize = 18, height = 50 }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[buttonStyles.blueButtonContainer, { height: height }]}
  >
    <Text style={[buttonStyles.blueButtonText, { fontSize: fontSize }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default BlueButton;
