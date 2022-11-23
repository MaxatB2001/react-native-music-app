import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  artist: {
    color: "lightgray",
    fontSize: 16,
    margin: 10,
  },
  image: {
    height: 250,
    width: 250,
    margin: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  buttons: {
    paddingVertical: 15,
    flexDirection: "row",
    width: '80%',
    justifyContent: "space-evenly",
  },
  imageBg: {
    width: "100%",
    height: 400,
    alignItems: "center",
    justifyContent: 'flex-end',
  },
});

export default styles;
