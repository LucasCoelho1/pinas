import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "georgia"
  },

  center: {
    alignItems: "center",
    justifyContent: "center",
  },

  stackLogin: {
    backgroundColor: "#000000",
  },

  Login: {
    width: '350px',
    marginBottom: "8%",
    color: "#fff",
  },

  Game: {
    alignItems: "center",
    justifyContent: "center",
    width: '350px',
    color: "#fff",
    padding: 10,
    border: "3px solid #DBD2D0",
    borderRadius: 10,
    backgroundColor: "#1c1c1c",
  },

  Home: {
    width: '350px',
    marginBottom: "8%",
    color: "#fff",
  },

  Register: {
    width: '350px',
    marginBottom: "8%",
    color: "#fff",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ff4655",
    textAlign: "center",
  },

  widthFull: {
    width: width,
  },

  distBottom: {
    marginBottom: 20,
  },

  distBottomHome: {
    marginBottom: 10,
  },

  containerFullWidth: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: width,
  },

  viewFetch: {
    flex: 1,
    backgroundColor: "#3B353D",
    alignItems: "left",
    justifyContent: "left",
    color: "white",
    border: "3px solid #DBD2D0",
    borderRadius: 10,
    padding: 10,
  },

  imagePersonagem: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },

  input: {
    width: "100%",
    backgroundColor: "#020709",
    textColor:"#fff"
  },

  ImageGame: {
    padding: 5, 
    border: "2px white solid", 
    borderRadius: 8, 
    marginBottom: 5, 
  },

});

export default styles;