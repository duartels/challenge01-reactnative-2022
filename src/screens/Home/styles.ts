import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 24
  },
  form:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -24,
  },
  toDoInput: {
    backgroundColor: "#262626",
    padding: 16,
    borderRadius: 6,
    flex: 1,
    fontSize: 16,
    color: "#F2F2F2",
    marginRight: 4
  },
  toDoButton: {
    padding: 18,
    backgroundColor: "#1E6F9F",
    borderRadius: 6
  },
  toDoList: {
    marginTop: 32,
    paddingBottom: 100
  },
  toDoListHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  }
});