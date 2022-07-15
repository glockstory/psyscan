import React from "react";
import LinearArea from "../Other/LinearArea";
import { Image } from "react-native";

function YouFeel() {
  return (
    <LinearArea>
      <Image source={require("../../assets/profile.png")}></Image>
    </LinearArea>
  );
}

export default YouFeel;
