import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: "#7e7e72",
  },
  topBar: {
    backgroundColor: "transparent",
    paddingTop: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  imageContainer: {
    backgroundColor: "transparent",
    width: "100%",
    alignItems: "center",
    paddingVertical: 20
  },
  image: {
    height: 250,
    width: 250,
    borderRadius: 10,
  },
  bottom: {
    backgroundColor: "transparent",
    padding: 25,
  },
  slider: { 
    width: '100%',
    paddingVertical: 20,
  },
  title: {
    backgroundColor: "transparent",
    alignItems: 'center'
  },
  songName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }, 
  songArtist: {
    color: '#b2b1a8',
    fontSize: 14,
  },
  buttons: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default styles;
