import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../styles/style";
import { Image, TouchableOpacity, ScrollView } from "react-native";
import PsyscanLabel from "./PsyscanLabel";

function LinearArea({ visibility = true, children }) {
  const navigation = useNavigation();
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
          <TouchableOpacity
            style={styles.squareMenu}
            onPress={() => navigation.navigate("YouFeel")}
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
    </LinearGradient>
  );
}

export default LinearArea;
