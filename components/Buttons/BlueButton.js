import React from "react";
import { buttonStyles } from "../../styles/buttons";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, Text } from "react-native";
const BlueButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient
      colors={["#004d40", "#009688"]}
      style={buttonStyles.appButtonContainer}
    >
      <Text style={buttonStyles.appButtonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

export default BlueButton;
