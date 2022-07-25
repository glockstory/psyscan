import React, { useState } from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { chooseTestStyles } from "../../styles/chooseTest";
import BlueButton from "../Buttons/BlueButton";
import GradientButtonTriangle from "../Buttons/GradientButtonTriangle";
import LinearArea from "../Other/LinearArea";

export default function ChooseTest({ navigation }) {
  const [textAdvancedVisiblity, setTextAdvancedVisibility] = useState(false);
  const [textPreliminaryVisibility, setTextPreliminaryVisibility] =
    useState(false);
  const [textLoremVisibility, setTextLoremVisibility] = useState(false);

  return (
    <LinearArea>
      <Text style={chooseTestStyles.text}>LET US GET TO KNOW YOU BETTER</Text>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <GradientButtonTriangle
          marginBottomProps={10}
          onPressButton={() =>
            setTextPreliminaryVisibility(!textPreliminaryVisibility)
          }
          title={"PRELIMINARY TESTING"}
          fontSizeProps={24}
        />
        {textPreliminaryVisibility ? (
          <View style={{ alignItems: "center" }}>
            <Text style={{ width: 300, color: "white", textAlign: "center" }}>
              The preliminary test is based on fuzzy logic reasoning and
              intended for getting a general idea of your mental status and
              recommendations if further testing is necessary. It is a very
              simple textual test, just answer the questions by clicking below.
            </Text>
            <BlueButton
              onPress={() => navigation.navigate("PreliminarySex")}
              title={"start the test"}
              fontSize={12}
              height={35}
            ></BlueButton>
          </View>
        ) : null}
        <GradientButtonTriangle
          marginBottomProps={10}
          onPressButton={() =>
            setTextAdvancedVisibility(!textAdvancedVisiblity)
          }
          title={"ADVANCED TESTING"}
          fontSizeProps={24}
        ></GradientButtonTriangle>
        {textAdvancedVisiblity ? (
          <View style={{ alignItems: "center" }}>
            <Text style={{ width: 300, color: "white", textAlign: "center" }}>
              The advanced test is based on contemporary AI techniques and
              includes analysis of the textual, audio, and visual information
              sources. The test provides major characteristics of the current
              mental health state but the final diagnosis will be given by the
              therapist.
            </Text>
            <BlueButton
              onPress={() => navigation.navigate("AdvancedTesting")}
              title={"start the test"}
              fontSize={12}
              height={35}
            ></BlueButton>
          </View>
        ) : null}
        <GradientButtonTriangle
          onPressButton={() => setTextLoremVisibility(!textLoremVisibility)}
          marginBottomProps={10}
          fontSizeProps={24}
          title={"GET RESULT"}
        />
        {textLoremVisibility ? (
          <View style={{ alignItems: "center" }}>
            <Text style={{ width: 300, color: "white", textAlign: "center" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
            <BlueButton
              onPress={() => navigation.navigate("AdvancedTesting")}
              title={"start the test"}
              fontSize={12}
              height={35}
            ></BlueButton>
          </View>
        ) : null}
      </ScrollView>
    </LinearArea>
  );
}
