import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function PickerLangLevel() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <Picker
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) => setSelectedLanguage}
    >
      <Picker.Item label="Elementary" value="elem" />
      <Picker.Item label="Intermediate" value="inter" />
      <Picker.Item label="Advanced" value="adv" />
    </Picker>
  );
}
