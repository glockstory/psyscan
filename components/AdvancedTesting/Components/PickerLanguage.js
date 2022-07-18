import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function PickerLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <Picker
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) => setSelectedLanguage}
    >
      <Picker.Item label="Italian" value="italy" />
      <Picker.Item label="English" value="eng" />
      <Picker.Item label="Russian" value="rus" />
    </Picker>
  );
}
