import React from "react";
import { styles } from "../../styles/style";
import { View, Text, TouchableOpacity } from "react-native";
import { menuPanelStyles } from "../../styles/menuPanel";
import { useNavigation } from "@react-navigation/native";
function MenuPanel() {
  const navigation = useNavigation();
  return (
    <View style={styles.menuPanel}>
      <Text style={menuPanelStyles.title}>Testing</Text>
      <Text
        style={{
          borderTopColor: "#00B9C2",
          borderTopWidth: 2,
          width: "90%",
          alignSelf: "center",
        }}
      ></Text>
      <TouchableOpacity onPress={() => navigation.navigate("YouFeel")}>
        <Text style={menuPanelStyles.title}>You</Text>
        <Text
          style={{
            borderTopColor: "#00B9C2",
            borderTopWidth: 2,
            width: "90%",
            alignSelf: "center",
          }}
        ></Text>
      </TouchableOpacity>

      <Text style={menuPanelStyles.title}>Appointments</Text>
    </View>
  );
}

export default MenuPanel;
