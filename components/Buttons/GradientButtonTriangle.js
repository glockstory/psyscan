import React, { useState } from "react";
import { buttonStyles } from "../../styles/buttons";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, Text, Image } from "react-native";

function GradientButtonTriangle({
  onPressButton,
  title,
  fontSizeProps,
  heightProps = 75,
  widthProps = 300,
  marginBottomProps = 5,
}) {
  const [triangleVisibility, setTriangleVisibility] = useState(true);
  const onPressOpacity = () => {
    onPressButton();
    setTriangleVisibility(!triangleVisibility);
  };
  return (
    <TouchableOpacity onPress={onPressOpacity}>
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
        {triangleVisibility ? (
          <Image
            style={{
              width: 15,
              height: 15,
              resizeMode: "contain",
              alignSelf: "center",
            }}
            source={require("../../assets/downTriangle.png")}
          ></Image>
        ) : (
          <Image
            style={{
              width: 15,
              height: 15,
              resizeMode: "contain",
              alignSelf: "center",
            }}
            source={require("../../assets/upTriangle.png")}
          ></Image>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default GradientButtonTriangle;
