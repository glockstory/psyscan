import { View, Text, Image, TextInput, SafeAreaView } from "react-native";
import React, { useState } from "react";
import LinearArea from "../Other/LinearArea";
import AdvancedDescription from "./AdvancedDescription";
import GradientButton from "../Buttons/GradientButton";

export default function AdvancedTextAnalysisResultsInfo() {
  return (
    <LinearArea>
      <AdvancedDescription>YOUR RESULTS</AdvancedDescription>
      <View style={{ alignItems: "flex-start", marginLeft: '2%' }}>
        <Text style={{ color: "green", fontSize: 18 }}>
          ✔ BE INFLUENCED BY FAMILY WHEN MAKING PRODUCT PURCHASES
        </Text>
        <Text style={{ color: "green", fontSize: 18 }}>✔ LIKE LATIN MUSIC</Text>
        <Text style={{ color: "green", fontSize: 18 }}>
          ✔ CONSIDER STARTING ABUSINESS IN NEXT FEW YEARS
        </Text>
        <Text style={{ color: "white", fontSize: 18 }}>
          YOU ARE UNLIKELY TO....
        </Text>
        <Text style={{ color: "#92000a", fontSize: 18 }}>
          × PREFER USING CREDIT CARDS FOR SHOPPING
        </Text>
        <Text style={{ color: "#92000a", fontSize: 18 }}>
          × LIKE DOCUMENTARY MOVIES
        </Text>
        <Text style={{ color: "#92000a", fontSize: 18 }}>
          × ATTEND LIVE MUSICAL EVENTS
        </Text>
      </View>
    </LinearArea>
  );
}
