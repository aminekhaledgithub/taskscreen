import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    paddingHorizontal: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    height: 115,
    borderRadius: 13,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 25,
  },

  titleCompleted: {
    textDecorationLine: "line-through",
  },

  checkImage: {
    width: 25,
    height: 25,
  },
});