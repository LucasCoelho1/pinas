import * as React from "react";
import { Image, ImageBackground, View } from "react-native";
import { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Provider, Text, TextInput } from "react-native-paper";
import styles from "../utils/styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Login realizado com sucesso!");
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        console.log("Erro ao logar: ", error);
        const errorCode = error.code;
        // Mensagem de erro
        if (errorCode === "auth/invalid-email") {
          console.log("Email inválido!");
        }
        if (errorCode === "auth/user-not-found") {
          console.log("Usuário não encontrado!");
        }
        if (errorCode === "auth/wrong-password") {
          console.log("Senha incorreta!");
        }
      });
  }

  return (
    <Provider>
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
          <View style={styles.Register}>
            <View style={styles.center}>
              <Image
                source={require("../assets/valorant-logo.png")}
                style={{ width: "50px", height: "50px" }}
              />
            </View>
            <Text style={styles.title}>Login</Text>
            <View style={styles.distBottom}></View>
            <View style={styles.center}>
              <TextInput
                label={"Email"}
                value={email}
                onChangeText={setEmail}
                mode="outlined"
                style={styles.input}
              />
              <View style={styles.distBottom}></View>
              <TextInput
                label={"Senha"}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
                mode="outlined"
                style={styles.input}
              />
              <View style={styles.distBottom}></View>
              <Button
                mode="contained"
                style={{
                  width: "100%",
                  backgroundColor: "#ff4655",
                  borderRadius: 0,
                }}
                textColor="#fff"
                onPress={handleLogin}
              >
                Login
              </Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
    </Provider>
  );
}