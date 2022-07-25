import React from "react";
import { View, Image } from "react-native";
import { styles } from "../../styles/style";
function PsyscanLabel() {
  return (
    <View style={styles.psyscanPanel}>
      <Image
        style={styles.leftArrow}
        source={require("../../assets/leftArrow.png")}
      />
      <Image
        style={styles.psyscanLabel}
        source={require("../../assets/psyscanLabel.png")}
      />
      <Image
        style={styles.rightArrow}
        source={require("../../assets/rightArrow.png")}
      />
    </View>
  );
}

export default PsyscanLabel;
