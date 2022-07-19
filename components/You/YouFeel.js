import React, { useState, useEffect } from "react";
import LinearArea from "../Other/LinearArea";
import { Image, Text } from "react-native";
import Line from "../Other/Line";
import { youFeel } from "../../styles/youFeel";
import BlueButton from "../Buttons/BlueButton";
import { styles } from "../../styles/style";
import Slider from "@react-native-community/slider";

function DisplayMood(rangeMood) {
  switch (rangeMood) {
    case 0:
      return "none";
      break;
    case 1:
      return "mild";
      break;
    case 2:
      return "normal";
      break;
    case 3:
      return "high";
      break;
    default:
      return "none";
  }
}
function YouFeel() {
  let currentMood = "none";
  const [rangeHours, setRangeHours] = useState("0");
  const [rangeActivity, setRangeActivity] = useState("0");
  const [rangeMood, setRangeMood] = useState("0");
  const [rangeDepressedMood, setRangeDepressedMood] = useState("0");

  useEffect(() => {
    currentMood = DisplayMood(rangeMood);
    console.log(currentMood, typeof currentMood);
  });

  return (
    <LinearArea>
      <Image
        style={youFeel.profile}
        source={require("../../assets/profile.png")}
      ></Image>
      <Text style={[styles.welcomeTo, { marginTop: "10%" }]}>you</Text>
      <Line></Line>
      <Text style={[styles.welcomeTo, { marginTop: "10%" }]}>
        Hours slept last night: {rangeHours}
      </Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={24}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        step={1}
        onValueChange={(value) => setRangeHours(value)}
      />
      <Text style={[styles.welcomeTo, { marginTop: "10%" }]}>
        Physical activity: {rangeActivity + "km"}
      </Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={1}
        maximumValue={100}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        step={1}
        //onValueChange={(value) => setRangeActivity(value)}
      />
      <Text style={[styles.welcomeTo, { marginTop: "10%" }]}>
        Today's most elevated mood: {currentMood}
      </Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={3}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        step={1}
        onValueChange={(value) => setRangeMood(value)}
      />
      <Text style={[styles.welcomeTo, { marginTop: "10%" }]}>
        Today's most depressed mood: {rangeDepressedMood}
      </Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={3}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        step={1}
        onValueChange={(value) => setRangeDepressedMood(value)}
      />
      <BlueButton title="Save"></BlueButton>
    </LinearArea>
  );
}

export default YouFeel;
