import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../styles/style";
import GradientButton from "../Buttons/GradientButton";
import { LinearGradient } from "expo-linear-gradient";
import LinearArea from "../Other/LinearArea";

export default function ChooseTest({ navigation }) {
  return (
    <LinearArea>
      <Text style={{ position: "relative", fontSize: 30, color: "white" }}>
        LET US GET TO KNOW YOU BETTER
      </Text>
      <View>
        <GradientButton
          onPress={() => navigation.navigate("PreliminarySex")}
          title={"PRELIMINARY TESTING"}
        />
        <GradientButton
          onPress={() => navigation.navigate("AdvancedTesting")}
          title={"ADVANCED TESTING"}
        />
        <GradientButton title={"GET RESULT"} />
      </View>
    </LinearArea>
  );
}
