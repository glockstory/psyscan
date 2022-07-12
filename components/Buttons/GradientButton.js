import React from "react";
import { buttonStyles } from "../../styles/buttons";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, Text } from "react-native";
const GradientButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#C9DDF1", "#8AC4E6", "#FFFFFF"]}
      style={buttonStyles.gradientButtonContainer}
    >
      <Text style={buttonStyles.gradientButtonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

export default GradientButton;
