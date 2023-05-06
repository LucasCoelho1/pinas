import { useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { Button, Paragraph, Provider, TextInput } from "react-native-paper";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from "../utils/styles";

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // função para lidar com o registro do usuário
  function handleRegister() {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Usuário criado com sucesso!");
        navigation.navigate("LoginScreen");
      })
      .catch((error) => {
        console.log("Erro ao criar usuário: ", error);
        const errorCode = error.code; // auth/weak-password
        // Mensagem de erro
        if (errorCode === "auth/weak-password") {
          console.log("A senha é muito fraca.");
        }
        if (errorCode === "auth/invalid-email") {
          console.log("Email inválido!");
        }
        if (errorCode === "auth/email-already-exists") {
          console.log("Email ja cadastrado!");
        }
        if (errorCode === "auth/auth/invalid-password") {
          console.log("Senha inválida!");
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
            <View style={styles.Login}>
              <View style={styles.center}>
                <Image
                  source={require("../assets/valorant-logo.png")}
                  style={{ width: "50px", height: "50px" }}
                />
              </View>
              <Text style={styles.title}>Realize o seu cadastro</Text>
              <View style={styles.distBottom}></View>
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
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
                mode="outlined"
                style={styles.input}
              />
              <View style={styles.distBottom}></View>
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#ff4655",
                  borderRadius: 0,
                }}
                textColor="#fff"
                mode="contained"
                onPress={handleRegister}
              >
                Registre-se
              </Button>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Provider>
  );
}