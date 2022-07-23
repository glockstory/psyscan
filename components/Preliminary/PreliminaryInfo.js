import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Text, View } from "react-native";
import LinearArea from "../Other/LinearArea";
import TextInputWrapper from "../Other/TextInputWrapper";
import Line from "../Other/Line";
import { registrationStyles } from "../../styles/registration";
function PreliminaryInfo() {
  const [selectedSex, setSelectedSex] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  return (
    <LinearArea>
      <Text
        style={{
          color: "white",
          fontSize: 24,
          textAlign: "center",
          width: "50%",
          textTransform: "uppercase",
        }}
      >
        preliminary testing
      </Text>
      <Line></Line>
      <Text
        style={[
          registrationStyles.title,
          { textTransform: "uppercase", marginBottom: 10 },
        ]}
      >
        gender
      </Text>
      <View
        style={{
          minWidth: 150,
          width: 300,
          height: 35,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          borderRadius: 10,
          backgroundColor: "white",
          opacity: 0.8,
          marginBottom: 10,
        }}
      >
        <Picker
          selectedValue={selectedSex}
          style={{ width: 300, height: 35, minWidth: 150 }}
          onValueChange={(itemValue, itemPosition) => setSelectedSex(itemValue)}
        >
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>
      <TextInputWrapper name="NATIONALITY"></TextInputWrapper>
      <Text
        style={[
          registrationStyles.title,
          { textTransform: "uppercase", marginBottom: 10 },
        ]}
      >
        location
      </Text>
      <View
        style={{
          minWidth: 150,
          width: 300,
          height: 35,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          borderRadius: 10,
          backgroundColor: "white",
          opacity: 0.8,
          marginBottom: 10,
        }}
      >
        <Picker
          selectedValue={selectedCountry}
          style={{ width: 300, height: 35, minWidth: 150 }}
          onValueChange={(itemValue, itemPosition) =>
            setSelectedCountry(itemValue)
          }
        >
          <Picker.Item label="Country1" value="Country1" />
          <Picker.Item label="Country2" value="Country2" />
          <Picker.Item label="Country3" value="Country3" />
        </Picker>
      </View>
      <TextInputWrapper name="OCCUPATION"></TextInputWrapper>
      <TextInputWrapper name="EDUCATION"></TextInputWrapper>
    </LinearArea>
  );
}

export default PreliminaryInfo;
