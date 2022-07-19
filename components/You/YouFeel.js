import React from "react";
import LinearArea from "../Other/LinearArea";
import { Image, Text } from "react-native";
import Line from "../Other/Line";
import { youFeel } from "../../styles/youFeel";
import BlueButton from "../Buttons/BlueButton";
import { styles } from "../../styles/style";

function YouFeel() {
  return (
    <LinearArea>
      <Image
        style={youFeel.profile}
        source={require("../../assets/profile.png")}
      ></Image>
      <Text style={[styles.welcomeTo, { marginTop: "10%" }]}>you</Text>
      <Line></Line>
      <Text style={[styles.welcomeTo, { marginTop: "10%" }]}>
        Hours slept last night:
      </Text>
      <Text style={[styles.welcomeTo, { marginTop: "10%" }]}>
        Physical activity:
      </Text>
      <Text style={[styles.welcomeTo, { marginTop: "10%" }]}>
        Today's most elevated mood:
      </Text>
      <Text style={[styles.welcomeTo, { marginTop: "10%" }]}>
        Today's most depressed mood:
      </Text>
      <BlueButton title="Save"></BlueButton>
    </LinearArea>
  );
}

export default YouFeel;
