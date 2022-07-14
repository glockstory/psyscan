import React from "react";
import { Text, View } from "react-native";
import { chooseTestStyles } from "../../styles/chooseTest";
import GradientButton from "../Buttons/GradientButton";
import LinearArea from "../Other/LinearArea";

export default function ChooseTest({ navigation }) {
  return (
    <LinearArea>
      <Text style={chooseTestStyles.text}>LET US GET TO KNOW YOU BETTER</Text>
      <View>
        <GradientButton
          marginBottomProps={10}
          onPress={() => navigation.navigate("PreliminarySex")}
          title={"PRELIMINARY TESTING"}
          fontSizeProps={24}
        />
        <GradientButton
          marginBottomProps={10}
          onPress={() => navigation.navigate("AdvancedTesting")}
          title={"ADVANCED TESTING"}
          fontSizeProps={24}
        />
        <GradientButton
          marginBottomProps={10}
          fontSizeProps={24}
          title={"GET RESULT"}
        />
      </View>
    </LinearArea>
  );
}
