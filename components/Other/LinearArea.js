import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../styles/style";
import { Image, TouchableOpacity, ScrollView } from "react-native";
import PsyscanLabel from "./PsyscanLabel";
import MenuPanel from "./MenuPanel";
function LinearArea({ visibility = true, children }) {
  const [menuVisibility, setMenuVisibility] = useState(false);
  return (
    <LinearGradient
      style={[styles.gradient]}
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
      <ScrollView
        contentContainerStyle={[
          {
            alignItems: "center",
          },
        ]}
      >
        {visibility ? (
          // <TouchableOpacity
          //   style={styles.squareMenu}
          //   onPress={() => navigation.navigate("YouFeel")}
          // >
          <TouchableOpacity
            style={styles.squareMenu}
            onPress={() => setMenuVisibility(!menuVisibility)}
          >
            <Image
              style={styles.squareImage}
              source={require("../../assets/squareMenu.png")}
            ></Image>
          </TouchableOpacity>
        ) : null}
        {children}
      </ScrollView>
      <PsyscanLabel></PsyscanLabel>
      {menuVisibility ? <MenuPanel></MenuPanel> : null}
    </LinearGradient>
  );
}

export default LinearArea;
