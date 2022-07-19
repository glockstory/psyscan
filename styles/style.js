import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    fontFamily: "Roboto",
    fontSize: 18,
    marginTop: "20%",
    color: "white",
    textTransform: "uppercase",
  },
  logoNew: {
    width: 400,
    height: 400,
  },
  input: {
    borderWidth: 1,
    backgroundColor: "white",
    minWidth: 150,
    width: 300,
    height: 35,
    padding: 10,
    borderRadius: 10,
    opacity: 0.8,
    borderWidth: 0,
    marginTop: 10,
    marginBottom: 10,
  },
  spaceIcons: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  gradient: {
    height: "100%",
    width: "100%",
    opacity: 0.9,
  },
  psyscanPanel: {
    flexDirection: "row",
  },
  psyscanLabel: { marginHorizontal: 50, resizeMode: "contain", width: 150 },
  squareMenu: {
    alignSelf: "flex-start",
    marginLeft: "5%",
    marginTop: "5%",
  },
  leftArrow: { width: 20, resizeMode: "contain" },
  rightArrow: { width: 20, resizeMode: "contain" },
  squareImage: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
});
