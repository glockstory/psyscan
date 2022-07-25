import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { View } from "react-native";

export default function PickerLangLevel() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <Picker
      selectedValue={selectedLanguage}
      style={{
        width: 200,
        height: 35,
        minWidth: 150,
        backgroundColor: "white",
        borderRadius: 100,
        opacity: 0.8
      }}
      onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
    >
      <Picker.Item label="Elementary" value="elem" />
      <Picker.Item label="Intermediate" value="inter" />
      <Picker.Item label="Advanced" value="adv" />
    </Picker>
  );
}
