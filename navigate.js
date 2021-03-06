import React from "react";
import LoginPage from "./components/Authentification/LoginPage";
import WelcomePage from "./components/WelcomePage";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegistrationPage from "./components/Authentification/RegistrationPage";
import ChooseTest from "./components/Authentification/ChooseTest";
import PreliminarySex from "./components/Preliminary/PreliminarySex";
import AdvancedTesting from "./components/AdvancedTesting/AdvancedTesting";
import AdvancedYourActivity from "./components/AdvancedTesting/AdvancedYourActivity";
import AdvancedVideoAnalysis from "./components/AdvancedTesting/AdvancedVideoAnalysis";
import AdvancedTextAnalysis from "./components/AdvancedTesting/AdvancedTextAnalysis";
import AdvancedAudioAnalysis from "./components/AdvancedTesting/AdvancedAudioAnalysis";
import AdvancedFaceScan from "./components/AdvancedTesting/AdvancedFaceScan";
import PreliminaryInfo from "./components/Preliminary/PreliminaryInfo";
import AdvancedTextAnalysisWriting from "./components/AdvancedTesting/AdvancedTextAnalysisWriting";
import AdvancedTextAnalysisResults from "./components/AdvancedTesting/AdvancedTextAnalysisResults";
import AdvancedTextAnalysisResultsInfo from "./components/AdvancedTesting/AdvancedTextAnalysisResultsInfo";
import AdvancedFaceScanCamera from "./components/AdvancedTesting/AdvancedFaceScanCamera";
import YouFeelScreen from "./components/You/YouFeel";
import AdvancedVideoAnalysisRecord from "./components/AdvancedTesting/AdvancedVideoAnalysisRecord";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={WelcomePage}
          options={{ title: "Main" }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationPage}
          options={{ title: "Registration" }}
        />
        <Stack.Screen
          name="ChooseTest"
          component={ChooseTest}
          options={{ title: "Choose the test" }}
        />
        <Stack.Screen
          name="PreliminarySex"
          component={PreliminarySex}
          options={{ title: "Sex doubts" }}
        />
        <Stack.Screen
          name="PreliminaryInfo"
          component={PreliminaryInfo}
          options={{ title: "Self info" }}
        />
        <Stack.Screen
          name="AdvancedTesting"
          component={AdvancedTesting}
          options={{ title: "Advanced Testing" }}
        />
        <Stack.Screen
          name="AdvancedYourActivity"
          component={AdvancedYourActivity}
          options={{ title: "Your activity" }}
        />
        <Stack.Screen
          name="AdvancedTextAnalysis"
          component={AdvancedTextAnalysis}
          options={{ title: "Text analysis" }}
        />
        <Stack.Screen
          name="AdvancedAudioAnalysis"
          component={AdvancedAudioAnalysis}
          options={{ title: "Audio analysis" }}
        />
        <Stack.Screen
          name="AdvancedFaceScan"
          component={AdvancedFaceScan}
          options={{ title: "Face scan" }}
        />
        <Stack.Screen
          name="AdvancedVideoAnalysis"
          component={AdvancedVideoAnalysis}
          options={{ title: "Video analysis" }}
        />
        <Stack.Screen
          name="AdvancedTextAnalysisWriting"
          component={AdvancedTextAnalysisWriting}
          options={{ title: "Writing" }}
        />
        <Stack.Screen
          name="YouFeel"
          component={YouFeelScreen}
          options={{ title: "Your feeling" }}
        />
        <Stack.Screen
          name="AdvancedTextAnalysisResults"
          component={AdvancedTextAnalysisResults}
          options={{ title: "Results" }}
        />
        <Stack.Screen
          name="AdvancedTextAnalysisResultsInfo"
          component={AdvancedTextAnalysisResultsInfo}
          options={{ title: "Results" }}
        />
        <Stack.Screen
          name="AdvancedFaceScanCamera"
          component={AdvancedFaceScanCamera}
        />
        <Stack.Screen
          name="AdvancedVideoAnalysisRecord"
          component={AdvancedVideoAnalysisRecord}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

