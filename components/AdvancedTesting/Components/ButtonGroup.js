import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export const ButtonGroup = ({ buttons, doAfterClick }) => {
  const [clickedId, setClickedId] = useState(0);
  const handleClick = (item, id) => {
    setClickedId(id);
    doAfterClick(item);
  };
  return (
    <View style={styles.container}>
      {buttons.map((buttonLabel, index) => {
        return (
          <TouchableOpacity
            onPress={(item) => handleClick(item, index)}
            key={index}
            style={[
              index === clickedId ? styles.buttonActive : styles.buttonInactive,
            ]}
          >
            <Text>{buttonLabel}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 100,
  },
  buttonInactive: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 20,
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 5,
  },
  buttonActive: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 20,
    backgroundColor: "cyan",
    borderColor: "black",
    borderRadius: 5,
  },
});
