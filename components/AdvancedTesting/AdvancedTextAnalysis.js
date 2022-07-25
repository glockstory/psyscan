import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import LinearArea from "../Other/LinearArea";
import AdvancedDescription from "./AdvancedDescription";
import GradientButton from "../Buttons/GradientButton";
import PickerLanguage from "./Components/PickerLanguage";
//  import CheckBox from "@react-native-community/checkbox";
import PickerLangLevel from "./Components/PickerLangLevel";
import { ButtonGroup } from "./Components/ButtonGroup";

export default function AdvancedTextAnalysis({ navigation }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const printLabel = (item) => {
    console.log("pressed");
  };
  return (
    <LinearArea visibility={false}>
      <AdvancedDescription>TEXT ANALYSIS</AdvancedDescription>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 124, height: 132, marginBottom: 10 }}
          source={require("../../assets/TextAnalysis.png")}
        ></Image>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            textAlign: "center",
            marginBottom: 5,
          }}
        >
          Choose language
        </Text>
        <PickerLanguage />
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: 16,
            }}
          >
            IS IT YOUR MOTHERTONGUE LANGUAGE?
          </Text>
          <View style={{ flexDirection: "row" }}>
            <ButtonGroup
              buttons={["Yes", "No"]}
              doAfterClick={printLabel}
            ></ButtonGroup>
          </View>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            textAlign: "center",
            marginBottom: 5,
          }}
        >
          Choose language level
        </Text>
        <PickerLangLevel />

        <GradientButton
          title={"NEXT"}
          onPress={() => navigation.navigate("AdvancedTextAnalysisWriting")}
        ></GradientButton>
      </View>
    </LinearArea>
  );
}
