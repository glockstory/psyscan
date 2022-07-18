import React from "react";
import PreliminaryDescription from "./PreliminaryDescription";
import GradientButton from "../Buttons/GradientButton";
import { View } from "react-native";
import LinearArea from "../Other/LinearArea";
function PreliminarySex({ navigation }) {
  return (
    <LinearArea>
      <PreliminaryDescription></PreliminaryDescription>
      <View style={{ marginTop: 25 }}>
        <GradientButton
          onPress={() => navigation.navigate("PreliminaryInfo")}
          title="0%"
        ></GradientButton>
        <GradientButton
          onPress={() => navigation.navigate("PreliminaryInfo")}
          title="25%"
        ></GradientButton>
        <GradientButton
          onPress={() => navigation.navigate("PreliminaryInfo")}
          title="50%"
        ></GradientButton>
        <GradientButton
          onPress={() => navigation.navigate("PreliminaryInfo")}
          title="100%"
        ></GradientButton>
      </View>
    </LinearArea>
  );
}

export default PreliminarySex;
