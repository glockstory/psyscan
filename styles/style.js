import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0F86AB",
      },
      title: {
        fontSize: 18,
        marginVertical: 2,
      },
      subtitle: {
        fontSize: 14,
        color: "#888",
      },
      welcomeTo: {
          position: "relative",
          fontFamily:'Roboto',
          fontStyle: 'normal',
          fontSize: 40,
          color: 'white',
      },
      logo: {
          position: "relative",
          height: 400,
          width: 400,
          marginLeft: '17%'
      },
      RegistationText: {
          fontSize: 25,
          color: "white"
      },
      input: {
        borderWidth: 1,
        backgroundColor:"white",
        width: 240,
        height: 40,
        padding: 10
      },
      marginBetweenElements: {
        marginRight: 10,
        // height: 60,
        // width: 60
      }
});