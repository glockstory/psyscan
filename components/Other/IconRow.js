import React from "react";
import { View, Image } from "react-native";
import { styles } from "../../styles/style";
function IconRow() {
  return (
    <View style={{ marginVertical: 10, flexDirection: "row" }}>
      <Image
        style={styles.spaceIcons}
        source={require("../../assets/facebook.png")}
      />
      <Image
        style={styles.spaceIcons}
        source={require("../../assets/gmailNew.png")}
      />
      <Image
        style={styles.spaceIcons}
        source={require("../../assets/in.png")}
      />
    </View>
  );
}

export default IconRow;
