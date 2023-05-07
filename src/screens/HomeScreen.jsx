import { Image, ImageBackground, View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg-site.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <View style={styles.center}>
          <View style={styles.Home}>
            <Text style={{ color: "#fff", textAlign: "center", fontFamily: "Franklin Gothic Medium", fontSize: 20, marginBottom: "5px"}}>
              Seja bem vindo!
            </Text>
            <Image
              source={require("../assets/banner-app.png")}
              style={{ width: "100%", height: "100%" }}
            />
            <Button
              mode="contained"
              style={{
                backgroundColor: "#ff4655",
                color: "#fff",
              }}
              onPress={() => {
                navigation.navigate("LoginScreen");
              }}
            >
              Faça o login
            </Button>
            <View style={styles.distBottom}></View>
            <Button
              mode="contained"
              style={{
                backgroundColor: "#ff4655",
                color: "#fff",
              }}
              onPress={() => {
                navigation.navigate("RegisterScreen");
              }}
            >
              Faça o registro
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
