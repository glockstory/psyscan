import React from "react";
import { buttonStyles } from "../../styles/buttons";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, Text } from "react-native";
const GradientButton = ({
  onPress,
  title,
  fontSizeProps,
  heightProps = 75,
  widthProps = 300,
  marginBottomProps = 5,
}) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#C9DDF1", "#8AC4E6", "#FFFFFF"]}
      style={[
        buttonStyles.gradientButtonContainer,
        {
          height: heightProps,
          width: widthProps,
          marginBottom: marginBottomProps,
          justifyContent: "center",
        },
      ]}
    >
      <Text
        style={[buttonStyles.gradientButtonText, { fontSize: fontSizeProps }]}
      >
        {title}
      </Text>
    </LinearGradient>
  </TouchableOpacity>
);

export default GradientButton;
