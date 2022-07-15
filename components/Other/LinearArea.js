import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../styles/style";
import { Image, View, TouchableOpacity } from "react-native";
export default function LinearArea({
  visibility = true,
  children,
  navigation,
}) {
  return (
    <LinearGradient
      style={[styles.gradient, { alignItems: "center" }]}
      colors={["#66B6D3", "#0F86AB", "#005980"]}
      start={{
        x: 0,
        y: 0,
      }}
      end={{
        x: 0,
        y: 1,
      }}
    >
      {visibility ? (
        <TouchableOpacity onPress={() => navigation.navigate("YouFeel")}>
          <Image
            onTap
            style={styles.squareMenu}
            source={require("../../assets/squareMenu.png")}
          ></Image>
        </TouchableOpacity>
      ) : (
        (visibility = false)
      )}
      {children}
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
    </LinearGradient>
  );
}
