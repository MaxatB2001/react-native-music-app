import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tab: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: { color: "white", paddingLeft: 8, fontWeight: "500" },
});

export default styles;
