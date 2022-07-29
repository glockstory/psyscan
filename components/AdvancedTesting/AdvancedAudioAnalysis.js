import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import LinearArea from "../Other/LinearArea";
import AdvancedDescription from "./AdvancedDescription";
import GradientButton from "../Buttons/GradientButton";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";

export default function AdvancedAudioAnalysis() {
  const [recording, setRecording] = React.useState();

  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);
    alert('saved')
  }
  return (
    <LinearArea>
      <AdvancedDescription>AUDIO ANALYSIS</AdvancedDescription>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 132, height: 212 }}
          source={require("../../assets/microphone.png")}
        ></Image>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="cyan"
        ></Slider>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            textAlign: "center",
            width: 280,
          }}
        >
          Now you will be asked to do the audio recording, follow the
          instruction to get through the test
        </Text>
        <GradientButton
          title={recording ? "Stop Recording" : "Start Recording"}
          onPress={recording ? stopRecording : startRecording}
        ></GradientButton>
      </View>
    </LinearArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
});
