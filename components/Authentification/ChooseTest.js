import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { chooseTestStyles } from "../../styles/chooseTest";
import BlueButton from "../Buttons/BlueButton";
import GradientButton from "../Buttons/GradientButton";
import LinearArea from "../Other/LinearArea";

export default function ChooseTest({ navigation }) {
  const [textAdvancedVisiblity, setTextAdvancedVisibility] = useState(false);
  const [textPreliminaryVisibility, setTextPreliminaryVisibility] =
    useState(false);

  return (
    <LinearArea>
      <Text style={chooseTestStyles.text}>LET US GET TO KNOW YOU BETTER</Text>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <GradientButton
          marginBottomProps={10}
          onPress={() =>
            setTextPreliminaryVisibility(!textPreliminaryVisibility)
          }
          title={"PRELIMINARY TESTING"}
          fontSizeProps={24}
        />
        {textPreliminaryVisibility ? (
          <View style={{ alignItems: "center" }}>
            <Text style={{ textAlign: "center" }}>
              The preliminary test is based on fuzzy logic reasoning and
              intended for getting a general idea of your mental status and
              recommendations if further testing is necessary. It is a very
              simple textual test, just answer the questions by clicking below.
            </Text>
            <BlueButton
              onPress={() => navigation.navigate("PreliminarySex")}
              title={"start the test"}
            ></BlueButton>
          </View>
        ) : null}
        <GradientButton
          marginBottomProps={10}
          onPress={() => setTextAdvancedVisibility(!textAdvancedVisiblity)}
          title={"ADVANCED TESTING"}
          fontSizeProps={24}
        />
        {textAdvancedVisiblity ? (
          <View style={{ alignItems: "center" }}>
            <Text style={{ textAlign: "center" }}>
              The advanced test is based on contemporary AI techniques and
              includes analysis of the textual, audio, and visual information
              sources. The test provides major characteristics of the current
              mental health state but the final diagnosis will be given by the
              therapist.
            </Text>
            <BlueButton
              onPress={() => navigation.navigate("AdvancedTesting")}
              title={"start the test"}
            ></BlueButton>
          </View>
        ) : null}

        <GradientButton
          marginBottomProps={10}
          fontSizeProps={24}
          title={"GET RESULT"}
        />
      </ScrollView>
    </LinearArea>
  );
}
