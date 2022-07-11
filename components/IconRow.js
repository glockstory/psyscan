import React from "react";
import { View, Image } from "react-native";
import { styles } from "../styles/style";
function IconRow() {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        style={styles.spaceIcons}
        source={require("../assets/facebook.png")}
      />
      <Image
        style={styles.spaceIcons}
        source={require("../assets/gmail.png")}
      />
      <Image style={styles.spaceIcons} source={require("../assets/in.png")} />
    </View>
  );
}

export default IconRow;
