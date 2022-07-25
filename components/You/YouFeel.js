import React, { useState, useEffect } from "react";
import LinearArea from "../Other/LinearArea";
import { Image, Text } from "react-native";
import Line from "../Other/Line";
import { youFeel } from "../../styles/youFeel";
import BlueButton from "../Buttons/BlueButton";
import { styles } from "../../styles/style";
import Slider from "@react-native-community/slider";

function YouFeel() {
  const [rangeHours, setRangeHours] = useState("0");
  const [rangeActivity, setRangeActivity] = useState("0");
  const [rangeMood, setRangeMood] = useState("none");
  const [rangeDepressedMood, setRangeDepressedMood] = useState("none");

  const DisplayMood = (value) => {
    switch (value) {
      case 0:
        setRangeMood("none");
        break;
      case 1:
        setRangeMood("mild");
        break;
      case 2:
        setRangeMood("normal");
        break;
      case 3:
        setRangeMood("high");
        break;
      default:
        setRangeMood("none");
        break;
    }
  };

  const DisplayDepressedMood = (value) => {
    switch (value) {
      case 0:
        setRangeDepressedMood("none");
        break;
      case 1:
        setRangeDepressedMood("mild");
        break;
      case 2:
        setRangeDepressedMood("normal");
        break;
      case 3:
        setRangeDepressedMood("high");
        break;
      default:
        setRangeDepressedMood("none");
        break;
    }
  };

  return (
    <LinearArea>
      <Image
        style={youFeel.profile}
        source={require("../../assets/profile.png")}
      ></Image>
      <Text style={[styles.welcomeTo, { marginTop: "5%" }]}>you</Text>
      <Line></Line>
      <Text style={[styles.welcomeTo, { marginTop: "5%" }]}>
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
      <Text style={[styles.welcomeTo, { marginTop: "5%" }]}>
        Physical activity: {rangeActivity + "km"}
      </Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={1}
        maximumValue={100}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        step={1}
        onValueChange={(value) => setRangeActivity(value)}
      />
      <Text style={[styles.welcomeTo, { marginTop: "5%" }]}>
        Today's most elevated mood: {rangeMood}
      </Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={3}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        step={1}
        onValueChange={(value) => DisplayMood(value)}
      />
      <Text style={[styles.welcomeTo, { marginTop: "5%" }]}>
        Today's most depressed mood: {rangeDepressedMood}
      </Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={3}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        step={1}
        onValueChange={(value) => DisplayDepressedMood(value)}
      />
      <BlueButton title="Save"></BlueButton>
    </LinearArea>
  );
}

export default YouFeel;
