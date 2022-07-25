import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function PickerLanguage() {
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
        opacity: 0.8,
      }}
      onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
    >
      <Picker.Item label="Italian" value="italy" />
      <Picker.Item label="English" value="eng" />
      <Picker.Item label="Russian" value="rus" />
    </Picker>
  );
}
