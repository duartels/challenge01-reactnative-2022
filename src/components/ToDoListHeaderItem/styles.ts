import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 8
  },
  value: {
    backgroundColor: "#333333",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 50,
  },
  valueText: {
    fontSize: 14,
    color: "#D9D9D9",
    fontWeight: "700"
  }
});