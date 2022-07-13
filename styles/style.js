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
    fontSize: 40,
    color: "white",
  },
  logo: {
    height: 400,
    width: 400,
    marginLeft: "17%",
  },
  registrationText: {
    fontSize: 25,
    color: "white",
  },
  input: {
    borderWidth: 1,
    backgroundColor: "white",
    width: 240,
    height: 40,
    padding: 10,
    borderRadius: 10,
    opacity: 0.8,
    borderWidth: 0,
    marginTop: 10,
  },
  spaceIcons: {
    marginRight: 20,
  },
  gradient: {
    height: "100%",
    width: "100%",
    opacity: 0.9,
  },
});
