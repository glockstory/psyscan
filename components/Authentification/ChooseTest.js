import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../styles/style";
import GradientButton from "../Buttons/GradientButton";
import { LinearGradient } from "expo-linear-gradient";

export default function ChooseTest({ navigation }) {
  return (
    <LinearGradient
      style={[styles.gradient, styles.centered]}
      colors={["#66B6D3", "#0F86AB", "#005980"]}
      start={{
        x: 0,
        y: 0,
      }}
      end={{
        x: 1,
        y: 1,
      }}
    >
      <Text style={{ position: "relative", fontSize: 30, color: "white" }}>
        LET US GET TO KNOW YOU BETTER
      </Text>
      <View>
        <GradientButton
          onPress={() => navigation.navigate("PreliminarySex")}
          title={"PRELIMINARY TESTING"}
        />
        <GradientButton title={"ADVANCED TESTING"} />
        <GradientButton title={"GET RESULT"} />
      </View>
    </LinearGradient>
  );
}
