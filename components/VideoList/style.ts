import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  img: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  timeContainer: {
    backgroundColor: "#00000099",
    height: 25,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    position: "absolute",
    right: 5,
    bottom: 5,
  },
  time: {
    color: "white",
  },
  titleRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#393838",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  middleContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  subTitle: {
    color: "gray",
    fontSize: 14,
    fontWeight: "500",
    display: "flex",
    justifyContent:"space-between"
  },
  icon: {
    
    color: "white",
  },
});

export default styles;